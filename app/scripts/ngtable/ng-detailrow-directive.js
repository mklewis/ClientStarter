'use strict';

angular.module('ngTableDetailRow', ['matchMedia',])
    .service("DetailRowService", function(screenSize){

        var sizeMap = {
            'lg': 80,
            'md': 60,
            'sm': 40,
            'xs': 20
        };
        var dflt = 80;

        var setPageSize = function(setPageSize){
            console.log('init page size');
            setPageSize(dflt);
            _.each(sizeMap, function (value, key) {
                screenSize.on(key, function (match) {
                    if (match) {
                        setPageSize(value);
                    }
                });
                if (screenSize.is(key)) {
                        setPageSize(value);
                }
            });
        };

        // by providing the collapseAt if the column is in the regular or detail table row and the page size,
        // determines if the break point to collapse a column has been passed.
        var showColumn = function (collapseAt, isDetailRow, pageSize) {
            if (!collapseAt) {
                return !isDetailRow;
            }
            var collapseSize = sizeMap[collapseAt];
            if (!isDetailRow && collapseSize <= pageSize) {
                return true;
            }
            if (isDetailRow && collapseSize > pageSize) {
                return true;
            }
            return false;
        };

        var detailsToShow = function (headings, pageSize) {
            var showExpand = false;
            _.each(headings, function (heading) {
                heading.show =  showColumn(heading.collapseAt, false, pageSize);
                if (heading.show === false) {
                    showExpand = true;
                }
            });
            return showExpand;
        };

        return {
            sizeMap: sizeMap,
            defaultSize: dflt,
            showColumn: showColumn,
            detailsToShow: detailsToShow,
            setPageSize: setPageSize

        };
    })
    .directive("detailRow", function(DetailRowService){
        return {
            restirct:"E",
            templateUrl: "scripts/ngtable/detail-row.html",
            replace: false,
            scope: {
                itemObject: "=",  //item object for each row.
                 headings: "=",   //headings array used by ng-tables with add collapseAt attribute.
                 pageSize: "=",
            },
            link: function(scope, element, attrs){
                scope.showColumn = DetailRowService.showColumn;
            }
        }
    });