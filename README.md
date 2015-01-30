An angular module for setting and getting browser cookies.

Angular module name: <b>lfCookies</b>


Name of service: <b>lfCookieService</b>

API methods exposed:

<b>Important:</b> Calling module must declare a constant string named FIREBASE_URL containing the url of a firebase database.

API Methods available on the lfCookieService:
-----------------------------------------------
<ul>
<li>setCookie - stores a cookie in the browser</li>
<li>getCookie - retrieves a cookie stored in the browser</li>



Usage example
-------------
First include the javascript file in your html document:<p>
    &lt;script src="./lf-cookies/lf-cookies.js"&gt;&lt;/script&gt;

Then use in your own javascript file. Example shown below:

    var myApp = angular.module('myApp', ['lfCookies']);

    myApp.controller('MyController', ['lfCookieService', function(lfCookieService) {

        //stores a cookie in the browser for 15 days
        var language = "English";
        this.saveLanguage = function(language) {
            lfCookieService.setCookie('language', language, 15);
        };

        //retrieve the current language
        this.retrieveLanguage = function() {
            lfCookieService.getCookie('language');
        };

    });
