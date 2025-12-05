// Configuration for Smart Quiz System
const QUIZ_CONFIG = {
    // Data persistence settings
    storage: {
        primaryKey: 'quizResults',
        backupKey: 'quizResultsBackup',
        autoBackupInterval: 5 * 60 * 1000, // 5 minutes
        maxResults: 1000 // Maximum results to store
    },
    
    // Quiz settings
    quiz: {
        passingScore: 20,
        totalMarks: 30,
        questionsPerQuiz: 10,
        marksPerQuestion: 3
    },
    
    // Admin panel settings
    admin: {
        refreshInterval: 30000, // 30 seconds
        dateFormat: 'bn-BD'
    },
    
    // GitHub Pages compatibility
    deployment: {
        enableOfflineMode: true,
        enableCrossBrowserSync: true,
        enableDataExport: true
    }
};

// Make config globally available
window.QUIZ_CONFIG = QUIZ_CONFIG;