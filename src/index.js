'use strict';

angular.module('test.main', [ 'ngRoute',
                              'ui.bootstrap']);

angular.module('test.main')
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                controller: 'ctlHome',
                templateUrl: 'src/templates/home.html'
            })
            .when('/album/:idAlbum', {
                controller: 'ctlAlbum',
                templateUrl: 'src/templates/album.html'
            })
            .otherwise({
                templateUrl: 'src/templates/404.html'
            });
            
          $locationProvider.html5Mode(true);
    }]);

angular.element(document).ready(function() {
    angular.bootstrap(document, ['test.main']);
});