"use strict";
var angular = require('angular');
module.exports = angular.module('app.controllers.MaterialTransitionCtrl', [])
    .controller('MaterialTransitionCtrl', [
        '$scope',
        '$stateParams',
        'HeaderInfo',
        'StateService',
        TestsListCtrl
    ])
    .config(function($stateProvider) {
        // Now set up the states
        $stateProvider
            .state('materialtransitions', {
                url: "/materialtransitions?newId&oldId",
                templateUrl: "views/partials/materialtransitions.html",
                controller: 'MaterialTransitionCtrl as MT',
                parent: 'menu'
            })
    }).service('StateService', function(){
       return {
           curPage : undefined,
           lastPage: undefined,
           lastIdx : undefined
       }
    })
var uuid = require('../Math.uuid.js');

function TestsListCtrl($scope, $stateParams,HeaderInfo, StateService) {
    var that = this;
    that.header = HeaderInfo;
    that.getId = getId;

    that.items = [];
    that.newId = $stateParams.newId;
    that.oldId = $stateParams.oldId;
    //We are going back a page if the new page has the same id as the last old page.
    //So we need to add the item at the specified idx
    //   some page->lastPage->curPage
    //   if we go back to lastPage then we need to add a link to curPage
    if (that.newId == StateService.lastPage){
        that.items[StateService.lastIdx] = StateService.curPage;
    }

    //Save the state to the service
        StateService.curPage  = that.newId;
        //This doesn't care if we go backwards, it just needs it for the animate ref
        StateService.lastPage = that.oldId;
        StateService.lastIdx  = $stateParams.idx || 0;


    for (var i=0; i<3; i++){
        if (!that.items[i]){
            that.items.push(that.getId());
        }
    }
    that.getRandomStyle = function getRandomStyle(){
      var colors = [
          'blue',
          'darkblue',
          'cyan',
          'coral',
          'darkgreen',
          'green',
          'red',
          'tomato',
          'yellow'
      ];
        var radius = [
            '50%',
            '0%',
            '25%'
        ];
        return {
            'border-radius': radius[Math.floor(Math.random()*radius.length)],
            'background-color': colors[Math.floor(Math.random()*colors.length)]
        }
    };
    that.animatedNum = 6;
    that.animated = [];
    that.newStyles = [];
    for (var i=0;i<that.animatedNum;i++){
        that.animated.push(i);
        that.newStyles.push(that.getRandomStyle());
    }
    console.log(that.newStyles);
    function getId(){
        return Math.uuidFast();
    }
}

