// Data Persistence System for Smart Quiz System
// Ensures data survives GitHub Pages deployment and browser sessions

class QuizDataManager {
    constructor() {
        this.storageKey = 'quizResults';
        this.backupKey = 'quizResultsBackup';
        this.init();
    }

    init() {
        // Create backup on page load
        this.createBackup();
        // Listen for storage changes across tabs
        window.addEventListener('storage', (e) => {
            if (e.key === this.storageKey) {
                this.syncData();
            }
        });
    }

    // Get all quiz results
    getResults() {
        try {
            const data = localStorage.getItem(this.storageKey);
            return data ? JSON.parse(data) : [];
        } catch (error) {
            console.warn('Error reading data, attempting backup restore:', error);
            return this.restoreFromBackup();
        }
    }

    // Save quiz result
    saveResult(result) {
        try {
            const results = this.getResults();
            const newResult = {
                id: Date.now() + Math.random(),
                name: result.name,
                score: result.score,
                topic: result.topic,
                passed: result.score >= 20,
                timestamp: new Date().toISOString(),
                ...result
            };
            
            results.push(newResult);
            localStorage.setItem(this.storageKey, JSON.stringify(results));
            this.createBackup();
            this.broadcastUpdate();
            return newResult;
        } catch (error) {
            console.error('Error saving result:', error);
            return null;
        }
    }

    // Create backup
    createBackup() {
        try {
            const data = localStorage.getItem(this.storageKey);
            if (data) {
                localStorage.setItem(this.backupKey, data);
                // Also store in sessionStorage as additional backup
                sessionStorage.setItem(this.storageKey, data);
            }
        } catch (error) {
            console.warn('Backup creation failed:', error);
        }
    }

    // Restore from backup
    restoreFromBackup() {
        try {
            // Try sessionStorage first
            let backup = sessionStorage.getItem(this.storageKey);
            if (!backup) {
                // Try localStorage backup
                backup = localStorage.getItem(this.backupKey);
            }
            
            if (backup) {
                const data = JSON.parse(backup);
                localStorage.setItem(this.storageKey, backup);
                return data;
            }
        } catch (error) {
            console.error('Backup restore failed:', error);
        }
        return [];
    }

    // Clear all data
    clearAll() {
        localStorage.removeItem(this.storageKey);
        localStorage.removeItem(this.backupKey);
        sessionStorage.removeItem(this.storageKey);
        this.broadcastUpdate();
    }

    // Export data as JSON
    exportData() {
        const results = this.getResults();
        const dataStr = JSON.stringify(results, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `quiz-results-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        
        URL.revokeObjectURL(url);
    }

    // Import data from JSON
    importData(jsonData) {
        try {
            const data = typeof jsonData === 'string' ? JSON.parse(jsonData) : jsonData;
            if (Array.isArray(data)) {
                localStorage.setItem(this.storageKey, JSON.stringify(data));
                this.createBackup();
                this.broadcastUpdate();
                return true;
            }
        } catch (error) {
            console.error('Import failed:', error);
        }
        return false;
    }

    // Broadcast update to other tabs
    broadcastUpdate() {
        window.dispatchEvent(new CustomEvent('quizDataUpdated', {
            detail: { timestamp: Date.now() }
        }));
    }

    // Sync data across tabs
    syncData() {
        window.dispatchEvent(new CustomEvent('quizDataSynced'));
    }

    // Get statistics
    getStats() {
        const results = this.getResults();
        const total = results.length;
        const passed = results.filter(r => r.passed).length;
        const failed = total - passed;
        const passRate = total > 0 ? (passed / total) * 100 : 0;
        const avgScore = total > 0 ? results.reduce((sum, r) => sum + r.score, 0) / total : 0;
        const maxScore = total > 0 ? Math.max(...results.map(r => r.score)) : 0;

        return {
            total,
            passed,
            failed,
            passRate: Math.round(passRate * 10) / 10,
            avgScore: Math.round(avgScore * 10) / 10,
            maxScore
        };
    }
}

// Initialize global data manager
window.quizDataManager = new QuizDataManager();

// Auto-backup every 5 minutes
setInterval(() => {
    window.quizDataManager.createBackup();
}, 5 * 60 * 1000);

// Backup before page unload
window.addEventListener('beforeunload', () => {
    window.quizDataManager.createBackup();
});