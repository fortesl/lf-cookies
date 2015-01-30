/**
 * Angularjs module 'lfCookies' exposing service with 2 methods: setCookie and getCookie
 *
 * Name: lf-cookies.js
 * Created by lfortes on 11/14/2014.
 */

(function () {
    'use strict';

    angular.module('lfCookies', []).factory('LFCookieService', [function() {

        /**
         * Sets a browser cookie
         * @param name
         * @param value
         * @param expirationDays
         */
        var setCookie = function (name, value, expirationDays) {
            var d = new Date();
            d.setTime(d.getTime() + (expirationDays*24*60*60*1000));
            var expires = 'expires='+d.toUTCString();
            document.cookie = name + "=" + value + "; " + expires;
        };

        /**
         * Retrieves a browser cookie
         * @param name
         * @returns {string}
         */
        var getCookie = function (name) {
            var cookieName = name + "=";
            var ca = document.cookie.split(';');
            for(var i=0; i<ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0)===' ') { c = c.substring(1); }
                if (c.indexOf(cookieName) !== -1) {
                    return c.substring(cookieName.length,c.length);
                }
            }
            return '';
        };

        return {
            /**
             *
              * @param name
             * @param value
             * @param expirationDays
             */
            setCookie: function(name, value, expirationDays) { setCookie(name, value, expirationDays); },

            /**
             * Retrieves a browser cookie
             * @param name
             * @returns {string}
             */
            getCookie: function(name) { return getCookie(name); }
        };
    }]);

})();