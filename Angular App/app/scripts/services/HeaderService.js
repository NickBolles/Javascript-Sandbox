/**
 * Created by Nicholas on 3/1/2016.
 */
var angular = require('angular');
module.exports = angular.module('app.services.HeaderInfo', [])
    .service('HeaderInfo', [
        HeaderInfo
    ]);

function HeaderInfo(){
    var service = {
        title: 'Main'
    };

    return service;

}