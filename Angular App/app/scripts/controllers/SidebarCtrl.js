"use strict";
var angular = require('angular');
module.exports = angular.module('app.controllers.SidebarCtl', [])
    .controller('SidebarCtrl', [
        'TestsList',
        '$mdSidenav',
        SidebarCtl
    ]);

function SidebarCtl(TestsList, $mdSidenav) {
    var that = this;
    that.tests = TestsList;
    that.openMenu = function(){
        $mdSidenav('left').toggle();
    }
}

