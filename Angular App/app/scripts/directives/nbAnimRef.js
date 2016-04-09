"use strict";
var angular = require('angular');
module.exports = angular.module('app.directives.nbAnimateRef', [])
    .directive('nbAnimateRef', function () {
        return {
            restrict: 'EA',
            link: nbAnimateRef
        }
    });

function nbAnimateRef(scope, element, attr) {
    var ref = attr.nbAnimRef || attr.ngAnimateRef;
    var el = [];
    if (angular.isArray(ref)){
        for (var i=0; i <ref.length;i++){
            el.push()
        }
    }else if(angular.isObject(ref)){
        for (var key in ref){
            el.push(createRefEl(key, ref[key]));
        }
    }else if (angular.isString(ref)){
        el.push(createRefEl(ref));
    }
    el = angular.element(el);
    element.append(el);

    function createRefEl(ref, css, classes){
        return angular.element('<div ng-animate-ref="'+ref+'"></div>')
            .add(classes);
    }
}

