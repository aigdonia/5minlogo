/**
 * Endpoints
 * @desc Contains all app endpoints
 */
(function () {
    'use strict';

    angular
        .module('5minlogo')
        .provider('Endpoints', endpoints);

    /**
     * Endpoints service
     */
    function endpoints() {
       var baseURL = 'http://accounts.intouch.com/';
        // var baseURL = 'http://localhost:3000';
        //var baseURL = 'https://api.intouch.com/';
        return {
            B2B: B2BEndpoints(),
            B2C: B2CEndpoints(),
            $get: function () {
                return this;
            }
        };

        /**
         * All B2B Endpoints
         */
        function B2BEndpoints() {
            var B2B = {
            };
            return B2B;
        }

        /**
         * All B2C Endpoints
         */
        function B2CEndpoints() {
            var B2C = {
                auth: {
                    login: function () {
                        return generateEndpoint('o/oauth2', '/login', '16-03-26');
                    },
                    getSubPassword: function () {
                        return generateEndpoint('o/oauth2', '/login', '16-03-26');
                    }
                },
                oauth: {
                    authorize: function () {
                        return generateEndpoint('o/oauth2', '/auth', '16-05-16');
                    },
                }
            };
            return B2C;
        }

        /**
         * generate (b2b/b2c) route endpoint with x-versin
         * @param {string} b2       (b2b/b2c)
         * @param {string} url      endpoint url
         * @param {string} xVersion endpoint url
         * @return {object}
         */
        function generateEndpoint(b2, url, xVersion) {
            var obj = {};
            if (b2.charAt(0) != '/') {
                b2 = '/' + b2;
            }
            obj.url = baseURL + b2 + url;
            obj.xVersion = xVersion;
            return obj;
        }
    }
})();
