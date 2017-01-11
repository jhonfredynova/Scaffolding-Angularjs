'use strict';

angular.module('test.main')
    .directive('dtvUserInfo', ['$rootScope', function ($rootScope) {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            template: '<div class="alert alert-success" role="alert"><h1>{{data.name}}</h1><p><b>Nombre de Usuario:</b> {{data.username}}<br/><b>Email:</b> {{data.email}}<br/><b>Teléfono:</b> {{data.phone}}<br/><b>Empresa:</b> {{data.company.name}}</p></div>',
            scope: {
                data: '=data'
            },
            controller: ["$scope", function ($scope) {
                
            }]
        };
    }]);
