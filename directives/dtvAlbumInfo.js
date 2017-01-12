'use strict';

angular.module('test.main')
    .directive('dtvAlbumInfo', ['$rootScope', function ($rootScope) {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            template: '<div class="col-sm-4 slideUp"><div class="thumbnail"><img ng-src="{{data.image}}" alt="Photo Test"><div class="caption"><h3 class="box-title">{{data.title}}</h3><p class="text-center"><a ng-href="{{data.link}}" class="btn btn-success" role="button">Ver Album</a></p></div></div></div>',
            scope: {
                data: '=data'
            },
            controller: ["$scope", function ($scope) {
                
            }]
        };
    }]);