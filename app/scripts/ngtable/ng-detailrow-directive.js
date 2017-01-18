'use strict';

angular.module('clientApp').directive("detailRow", function(){
    return {
        restirct:"E",
        template: '<td colspan="{{tableCtrl[headings].length}}"><table class="table table-striped table-condensed"><tr ng-repeat="h in tableCtrl[headings]" ng-show="tableCtrl[showColumnFn](h.field, true)"><td class="col-xs-4"> {{h.title}}</td><td class="col-xs-8 text-left">{{itemObject[h.field]}}</td></tr></table></td>',
        replace: false,
        scope: {
            itemObject: "=",  //item object for each row.
            tableCtrl: "=",   //access to the tables controller.
            headings: "@",
            showColumnFn: "@"
        }
    }
});