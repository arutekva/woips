/**
 * MAIN.JS - Global JavaScript untuk WOIPS Platform
 * Author: Studekasa
 * Version: 1.0.0
 */

// ===== GLOBAL CONFIGURATION =====
const WOIPS_CONFIG = {
    version: '1.0.0',
    apps: {
        olympedia: {
            name: 'OLYMPEDIA',
            color: '#58CC02',
            storageKey: 'woips_olympedia_v1',
            bookmarkKey: 'woips_olympedia_bookmarks'
        },
        olymap: {
            name: 'OLYMAP',
            color: '#1CB0F6',
            storageKey: 'woips_olymap_v1'
        },
        olymnote: {
            name: 'OLYMNOTE',
            color: '#CE82FF',
            storageKey: 'woips_olymnote_v1'
        }
    },
    debug: true
};

// ===== UTILITY FUNCTIONS =====
const WOIPS = {
    /**
     * Logging utility (only in debug mode)
     */
    log: function(...args) {
        if (WOIPS_CONFIG.debug) {
            console.log('[WOIPS]', ...args);
        }
    },

    /**
     * Error logging
     */
    error: function(...args) {
        console.error('[WOIPS ERROR]', ...args);
    },

    /**
     * Save data to localStorage with namespace
     */
    saveData: function(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
            return true;
        } catch (e) {
            this.error('Failed to save data:', e);
            return false;
        }
    },

    /**
     * Load data from localStorage
     */
    loadData: function(key, defaultValue = null) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : defaultValue;
        } catch (e) {
            this.error('Failed to load data:', e);
            return defaultValue;
        }
    },

    /**
     * Generate short ID (base32-like) for URLs
     */
    generateShortId: function(length = 8) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'; // Base32 characters
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    },

    /**
     * Encode Google Drive ID to short ID
     */
    encodeDriveId: function(driveId) {
        // Simple encoding - in production use proper base32 encoding
        return btoa(driveId).replace(/=/g, '').substring(0, 8);
    },

    /**
     * Decode short ID back to Google Drive ID
     */
    decodeDriveId: function(shortId) {
        // Simple decoding - in production use proper base32 decoding
        try {
            return atob(shortId);
        } catch {
            return shortId;
        }
    },

    /**
     * Show toast notification
     */
    toast: function(message, type = 'info', duration = 3000) {
        // Create toast element
        const toast = document.createElement('div');
        toast.className = `toast-notification toast-${type}`;
        toast.innerHTML = `
            <div class="toast-content">
                <i class="bi ${type === 'success' ? 'bi-check-circle-fill' : 
                                 type === 'error' ? 'bi-exclamation-circle-fill' : 
                                 'bi-info-circle-fill'}"></i>
                <span>${message}</span>
            </div>
        `;

        // Add styles
        toast.style.cssText = `
            position: fixed;
            bottom: 100px;
            left: 50%;
            transform: translateX(-50%);
            background: white;
            color: var(--text-dark);
            padding: 12px 20px;
            border-radius: var(--radius-full);
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 9999;
            font-weight: 600;
            border-left: 4px solid ${type === 'success' ? 'var(--primary-green)' : 
                                      type === 'error' ? 'var(--primary-red)' : 
                                      'var(--primary-blue)'};
            animation: slideUp 0.3s ease;
        `;

        document.body.appendChild(toast);

        // Remove after duration
        setTimeout(() => {
            toast.style.animation = 'slideDown 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, duration);
    },

    /**
     * Show confirmation dialog
     */
    confirm: function(title, message, callback) {
        if (window.Swal) {
            Swal.fire({
                title: title,
                text: message,
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Ya',
                cancelButtonText: 'Batal',
                confirmButtonColor: 'var(--primary-green)'
            }).then((result) => {
                if (result.isConfirmed && callback) {
                    callback();
                }
            });
        } else {
            if (confirm(`${title}\n${message}`) && callback) {
                callback();
            }
        }
    },

    /**
     * Get current app from URL path
     */
    getCurrentApp: function() {
        const path = window.location.pathname;
        if (path.includes('/olympedia/')) return 'olympedia';
        if (path.includes('/olymap/')) return 'olymap';
        if (path.includes('/olymnote/')) return 'olymnote';
        return 'home';
    },

    /**
     * Initialize bottom navigation active state
     */
    initBottomNav: function() {
        const currentApp = this.getCurrentApp();
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.includes(currentApp)) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    },

    /**
     * Format date to Indonesian format
     */
    formatDate: function(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    },

    /**
     * Debounce function for search inputs
     */
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
};

// ===== PWA / SERVICE WORKER REGISTRATION =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                WOIPS.log('ServiceWorker registered:', registration.scope);
            })
            .catch(error => {
                WOIPS.error('ServiceWorker registration failed:', error);
            });
    });
}

// ===== INITIALIZE ON PAGE LOAD =====
document.addEventListener('DOMContentLoaded', () => {
    WOIPS.log('WOIPS Platform initialized');
    WOIPS.initBottomNav();

    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideUp {
            from { transform: translateX(-50%) translateY(100px); opacity: 0; }
            to { transform: translateX(-50%) translateY(0); opacity: 1; }
        }
        @keyframes slideDown {
            from { transform: translateX(-50%) translateY(0); opacity: 1; }
            to { transform: translateX(-50%) translateY(100px); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
});

// ===== EXPORT FOR USE IN OTHER SCRIPTS =====
window.WOIPS = WOIPS;
