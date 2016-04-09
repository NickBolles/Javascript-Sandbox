'use strict';
var angular = require('angular'); // That's right! We can just require angular as if we were in node
console.log(require('angular-material'));
angular.module('app', [
    require('angular-ui-router'),
    require('angular-material'),
    require('./services').name,
    require('./controllers').name
])
.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise('/');
    //
    // Now set up the states
    $stateProvider
        .state('menu', {
            abstract: true,
            templateUrl: 'views/abstract/menu.html'
        });


})
    .run(function($rootScope){
        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
            event.preventDefault();
            console.log('ERROR IN STATE CHANGE! ', event, toState, toParams, fromState, fromParams, error)
            //debugger;
            //$state.get('error').error = { code: 123, description: 'Exception stack trace' };
            //return $state.go('error');
        });
    })
