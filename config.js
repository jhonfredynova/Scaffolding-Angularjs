'use strict';

angular.module('test.main', [  'ngResource',
                               'ngRoute',
                               'ui.bootstrap']);

angular.module('test.main')
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                controller: 'ctlHome',
                templateUrl: 'templates/home.html'
            })
            .when('/album/:idAlbum', {
                controller: 'ctlAlbum',
                templateUrl: 'templates/album.html'
            })
            .otherwise({
                templateUrl: 'templates/404.html'
            });
            
          $locationProvider.html5Mode(true);
    }]);

angular.element(document).ready(function() {
    angular.bootstrap(document, ['test.main']);
});