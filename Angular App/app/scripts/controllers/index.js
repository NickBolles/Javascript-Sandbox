/**
 * Created by Nicholas on 3/1/2016.
 */
var angular = require('angular');
module.exports = angular.module('app.controllers', [
    require('./TestsListCtrl').name,
    require('./HeaderCtrl').name,
    require('./MaterialTransitionsCtrl').name,
    require('./PromiseTestCtrl').name,
    require('./SidebarCtrl').name
]);