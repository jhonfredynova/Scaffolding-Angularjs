'use strict';

angular.module('test.main')

    .controller('ctlHome', ['$scope', '$routeParams', '$location', '$http', '$rootScope',
        function ($scope, $routeParams, $location, $http, $rootScope) {  
        
        $rootScope.rootUrl = 'http://jsonplaceholder.typicode.com/';
        
        $scope.getRandom = function(min, max) {
            return Math.round(Math.random() * (max - min) + min); 
        }
        
        $http.get($rootScope.rootUrl+'users')
        .then(function(response){
            $scope.user = response.data[$scope.getRandom(1,9)];
            return $http.get($rootScope.rootUrl+'albums');
        })
        .then(function(response){
            $scope.albums = _.filter(response.data, function(item){
                if (item.userId===$scope.user.id) {
                    item.image = 'http://image.shutterstock.com/z/stock-photo-set-of-wedding-albums-and-wedding-books-at-wooden-background-437154097.jpg';
                    item.link = '/album/'+item.id;
                    return item;
                }
            });
        })
        .catch(function(err){
            console.log('err: '+err); 
        });
        
    }

]);