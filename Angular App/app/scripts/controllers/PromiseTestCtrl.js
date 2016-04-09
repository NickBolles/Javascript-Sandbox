"use strict";
var angular = require('angular');
module.exports = angular.module('app.controllers.PromiseTestCtrl', [])
    .controller('PromiseTestCtrl', [
        '$scope',
        'PromiseTestService',
        'WorkerTestService',
        '$timeout',
        WelcomeCtrl
    ])
    .config(function($stateProvider) {
        // Now set up the states
        $stateProvider
            .state('promisetests', {
                url: "/promisetests",
                templateUrl: "views/partials/promisetests.html",
                controller: 'PromiseTestCtrl as PT',
                parent: 'menu'
            });
    });

function WelcomeCtrl($scope, PromiseTestService, WorkerTestService, $timeout) {
    var that = this;
    var testResults = [];
    that.testResults = testResults;
    $timeout(function(){
        PromiseTestService.promiseOrderTest().then(function(result){
                result = result.split('\r\n');
                if (testResults === result){
                    console.log('Messages are the same, skipping');
                    testResults.push('RESOLVED...RESULT above');
                }else{
                    testResults.concat(['RESOLVED...RESULT:', result]);
                }
            },
            function(result){
                testResults.concat(['REJECTED BECAUSE... ', result]);
            },
            function(message){
                testResults.push(message);
            });
    }, 3000)


}

