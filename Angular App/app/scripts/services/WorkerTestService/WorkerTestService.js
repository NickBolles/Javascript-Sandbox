/**
 * Created by Nicholas on 3/1/2016.
 */
var angular = require('angular');
module.exports = angular.module('app.services.WorkerTestService.service', [])
.service('WorkerTestService', [
    '$q',
    '$timeout',
    'PromiseTestService',
    WorkerTestService
]);

//Things to try
//  - Multiple functions in service
//  - Pass objects both ways
//  - Log back to proxy
//  - Access angular
//  - Access browserify requirements


//First create an angular blob fileURL
//Then WebWorkify it

function WorkerTestService($q, $timeout){

    function BuildService(){
        if (window.Worker){
            //var worker = require('webworkify')(require('./worker.js'));
            //worker.addEventListener('message', function (ev) {
            //    console.log(ev.data);
            //});
            //worker.addEventListener('error', function (ev) {
            //    console.log(ev.message);
            //});
            //worker.postMessage(4);
        }
    }
    return BuildService();

}