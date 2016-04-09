/**
 * Created by Nicholas on 3/1/2016.
 */
var angular = require('angular');
module.exports = angular.module('app.services', [
    require('./PromiseTestService').name,
    require('./HeaderService').name,
    require('./TestsList').name,
    require('./WorkerTestService/WorkerTestService').name
]);