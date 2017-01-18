'use strict';

angular.module('clientApp').directive("detailRow", function(){
    return {
        restirct:"E",
        templateUrl: "scripts/ngtable/detail-row.html",
        replace: false,
        scope: {
            itemObject: "=",  //item object for each row.
            tableCtrl: "=",   //access to the tables controller where the headings and show column function are located.
            headings: "@",   //headings array used by ng-tables with add collapseAt attribute.
            showColumnFn: "@" //function to determine if a column should be shown or hidden.
        }
    }
});