"use strict";
var angular = require('angular');
module.exports = angular.module('app.controllers.TestListCtrl', [])
    .controller('TestListCtrl', [
        '$scope',
        'TestsList',
        'HeaderInfo',
        TestsListCtrl
    ])
    .config(function($stateProvider) {
        // Now set up the states
        $stateProvider
            .state('testlist', {
                url: "/",
                templateUrl: "views/partials/testlist.html",
                controller: 'TestListCtrl as TL',
                parent: 'menu'
            })
    });

function TestsListCtrl($scope, TestsList,HeaderInfo) {
    var that = this;
    that.header = HeaderInfo;
    that.tests = TestsList;
}

