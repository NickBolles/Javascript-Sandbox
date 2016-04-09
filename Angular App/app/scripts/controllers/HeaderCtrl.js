"use strict";
var angular = require('angular');
module.exports = angular.module('app.controllers.HeaderCtl', [])
    .controller('HeaderCtl', [
        '$scope',
        'TestList',
        HeaderCtl
    ]);

function HeaderCtl($scope, TestList) {
    $scope.title = HeaderService.title;
}

