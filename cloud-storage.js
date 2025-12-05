// Cloud Storage Integration for Quiz System
// Firebase Realtime Database সাপোর্ট

class CloudStorage {
    constructor() {
        this.isOnline = navigator.onLine;
        this.syncQueue = [];
        this.setupEventListeners();
    }

    // Firebase config (replace with your config)
    initFirebase() {
        // Add your Firebase config here
        const firebaseConfig = {
            // Your config
        };
        
        if (typeof firebase !== 'undefined') {
            firebase.initializeApp(firebaseConfig);
            this.database = firebase.database();
            return true;
        }
        return false;
    }

    // Save quiz result to cloud
    async saveResult(result) {
        try {
            // Try cloud first
            if (this.isOnline && this.database) {
                const ref = this.database.ref('quiz-results');
                await ref.push({
                    ...result,
                    id: Date.now().toString(),
                    synced: true
                });
            }
            
            // Always save to localStorage as backup
            this.saveToLocal(result);
            
        } catch (error) {
            console.log('Cloud save failed, using local storage');
            this.saveToLocal(result);
            this.addToSyncQueue(result);
        }
    }

    // Get all results (cloud + local)
    async getAllResults() {
        let results = [];
        
        try {
            // Get from cloud if online
            if (this.isOnline && this.database) {
                const snapshot = await this.database.ref('quiz-results').once('value');
                const cloudData = snapshot.val();
                if (cloudData) {
                    results = Object.values(cloudData);
                }
            }
        } catch (error) {
            console.log('Cloud fetch failed, using local data');
        }
        
        // Merge with local data
        const localResults = this.getLocalResults();
        const mergedResults = this.mergeResults(results, localResults);
        
        return mergedResults;
    }

    // Local storage methods
    saveToLocal(result) {
        const results = this.getLocalResults();
        results.push(result);
        localStorage.setItem('quizResults', JSON.stringify(results));
    }

    getLocalResults() {
        const results = localStorage.getItem('quizResults');
        return results ? JSON.parse(results) : [];
    }

    // Merge cloud and local results
    mergeResults(cloudResults, localResults) {
        const allResults = [...cloudResults, ...localResults];
        
        // Remove duplicates based on timestamp and name
        const uniqueResults = allResults.filter((result, index, self) => 
            index === self.findIndex(r => 
                r.timestamp === result.timestamp && r.name === result.name
            )
        );
        
        return uniqueResults.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    }

    // Sync queue for offline results
    addToSyncQueue(result) {
        this.syncQueue.push(result);
        localStorage.setItem('syncQueue', JSON.stringify(this.syncQueue));
    }

    async syncPendingResults() {
        if (!this.isOnline || !this.database) return;
        
        const queue = JSON.parse(localStorage.getItem('syncQueue') || '[]');
        
        for (const result of queue) {
            try {
                await this.database.ref('quiz-results').push(result);
            } catch (error) {
                console.log('Sync failed for result:', result);
                return;
            }
        }
        
        // Clear sync queue after successful sync
        localStorage.removeItem('syncQueue');
        this.syncQueue = [];
    }

    setupEventListeners() {
        // Online/offline detection
        window.addEventListener('online', () => {
            this.isOnline = true;
            this.syncPendingResults();
        });
        
        window.addEventListener('offline', () => {
            this.isOnline = false;
        });
    }
}

// Usage example
const cloudStorage = new CloudStorage();

// Modified save function for quiz results
function saveQuizResult(result) {
    cloudStorage.saveResult(result);
}

// Modified load function for admin panel
async function loadAllResults() {
    const results = await cloudStorage.getAllResults();
    return results;
}