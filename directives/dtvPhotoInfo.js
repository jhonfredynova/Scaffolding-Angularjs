'use strict';

angular.module('test.main')
    .directive('dtvPhotoInfo', ['$rootScope', function ($rootScope) {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            template: '<div class="col-sm-4 col-md-3 fadeIn"><div class="thumbnail"><img ng-src="{{data.thumbnailUrl}}" alt="Photo Test"><div class="caption"><h3 class="box-title">{{data.title}}</h3><p class="text-center"><a href="{{data.url}}" target="_blank" class="btn btn-success" role="button">Ver Original</a></p></div></div></div>',
            scope: {
                data: '=data'
            },
            controller: ["$scope", function ($scope) {
                
            }]
        };
    }]);