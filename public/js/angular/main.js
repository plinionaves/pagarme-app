/* global angular */
(function() {
    
    'use strict';
    
    angular.module('pagarme-app', ['ngRoute', 'ngMaterial'])
    
    .config(['$routeProvider', function($routeProvider) {
        
        $routeProvider
            .when('/', {templateUrl: 'js/angular/pages/home/home.html', controller: 'HomeController', controllerAs: 'home'})
            .otherwise({redirectTo: '/'});
        
    }]);
    
})();