/**
 * ROUTER.JS - Navigation and Routing Handler
 * Author: Studekasa
 */

const WOIPS_ROUTER = {
    /**
     * Navigate to specific app
     */
    navigateToApp: function(appName) {
        const urls = {
            'home': '/',
            'olympedia': '/olympedia/',
            'olymap': '/olymap/',
            'olymnote': '/olymnote/'
        };

        if (urls[appName]) {
            window.location.href = urls[appName];
        }
    },

    /**
     * Navigate to file viewer in Olympedia
     */
    navigateToFile: function(fileId) {
        const shortId = WOIPS.encodeDriveId(fileId);
        window.location.href = `/olympedia/file/${shortId}/`;
    },

    /**
     * Get file ID from URL (for viewer page)
     */
    getFileIdFromUrl: function() {
        const path = window.location.pathname;
        const match = path.match(/\/olympedia\/file\/([^\/]+)/);
        return match ? WOIPS.decodeDriveId(match[1]) : null;
    },

    /**
     * Handle back button navigation
     */
    handleBack: function(defaultUrl = '/') {
        if (document.referrer) {
            history.back();
        } else {
            window.location.href = defaultUrl;
        }
    },

    /**
     * Update browser history without reload
     */
    pushState: function(url, title) {
        history.pushState({}, title, url);
        document.title = title;
    },

    /**
     * Handle popstate event (browser back/forward)
     */
    initPopStateHandler: function() {
        window.addEventListener('popstate', (event) => {
            WOIPS.log('Navigation state changed:', event.state);
            // Re-initialize current app if needed
            if (typeof window.APP_CURRENT_INIT === 'function') {
                window.APP_CURRENT_INIT();
            }
        });
    }
};

// Initialize popstate handler
WOIPS_ROUTER.initPopStateHandler();

window.WOIPS_ROUTER = WOIPS_ROUTER;
