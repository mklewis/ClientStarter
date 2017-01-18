'use strict';

angular.module('clientApp').directive("detailRow", function(){
    return {
        restirct:"AE",
        templateUrl: "scripts/ngtable/detail-row.html",
        replace: false,
        scope: {
            itemObject: "=",  //item object for each row.
            tableCtrl: "="   //access to the tables controller.
        }
    }
});