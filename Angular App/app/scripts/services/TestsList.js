/**
 * Created by Nicholas on 3/1/2016.
 */
var angular = require('angular');
module.exports = angular.module('app.services.TestsList', [])
    .service('TestsList', [
        '$q',
        '$http',
        TestsList
    ]);

function TestsList($q,$http){
    var tests = [
        {
            "name": "Promise Tests",
            "url": "promisetests",
            "description": "Test promises, their order of execution and the values passed between them"
        },
        {
            "name": "Material Transition Tests",
            "url": "materialtransitions",
            "description": "Test material transitions, their performance etc",
        }
    ]
    //var promise = $q.when(tests);
    //var d = $q.defer();
    //promise.then(function(data){
    //    d.resolve(data);
    //    return data;
    //});
    return tests;
}