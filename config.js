'use strict';

angular.module('test.main', [  'ngResource',
                               'ngRoute',
                               'ui.bootstrap']);

angular.module('test.main')
	.config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'ctlHome',
                templateUrl: 'templates/home.html'
            })
            .when('/photos/:idAlbum', {
                controller: 'ctlPhotos',
                templateUrl: 'templates/photos.html'
            })
            .otherwise({
                templateUrl: 'modules/common/templates/404.html'
            });
    }]);

angular.element(document).ready(function() {
    angular.bootstrap(document, ['test.main']);
});