'use strict';

angular.module('test.main')

    .controller('ctlAlbum', ['$scope', '$routeParams', '$location', '$http', '$rootScope',
        function ($scope, $routeParams, $location, $http, $rootScope) {  
        
        $rootScope.rootUrl = 'http://jsonplaceholder.typicode.com/';
        
        $http.get($rootScope.rootUrl+'photos')
        .then(function(response){
            $scope.photos = _.filter(response.data, function(item){
                if (item.albumId.toString()===$routeParams.idAlbum) {
                    return item;
                }
            });
        })
        .catch(function(err){
            console.log('err: '+err); 
        });
        
    }

]);