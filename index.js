/**
 * Support Hub Portal - Navigation Router
 */
(function () {
    'use strict';

    /**
     * Map of route aliases to relative file paths.
     * @type {Readonly<Record<string, string>>}
     */
    const ROUTES = Object.freeze({
        'admin': 'assets/admin/adminpage/admindashboard.html',
        'admin-settings': 'assets/adminsettings/adminsettingspage/adminsettingsdashboard.html',
        'user': 'assets/user/userpage/user.html'
    });

    /**
     * Routes navigation to target page destination.
     * @param {string} destination - Key representing target route
     */
    function navigateTo(destination) {
        if (!destination || typeof destination !== 'string') {
            console.warn('Navigation failed: Invalid route key provided.');
            return;
        }

        const targetRoute = ROUTES[destination.trim()];

        if (targetRoute) {
            window.location.href = targetRoute;
        } else {
            console.warn(`Target path not found for destination: "${destination}"`);
        }
    }

    /**
     * Initialize event listeners on page load
     */
    function initPortal() {
        // Event delegation for portal navigation buttons
        document.addEventListener('click', function (event) {
            const navButton = event.target.closest('[data-destination]');
            if (navButton) {
                const destination = navButton.getAttribute('data-destination');
                navigateTo(destination);
            }
        });
    }

    // Attach listener when DOM content is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPortal);
    } else {
        initPortal();
    }

    // Expose navigateTo globally to maintain legacy compatibility
    window.navigateTo = navigateTo;
})();