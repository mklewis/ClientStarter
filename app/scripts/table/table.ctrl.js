'use strict';

angular.module('clientApp')
  .controller('TableCtrl', [ '$rootScope', 'screenSize',
  function ( $rootScope, screenSize ) {

    var tableCtrl = this;
    
    
    $rootScope.pageTitle = "Table Exaple";

    tableCtrl.itemsByPage=15;

    tableCtrl.media_lg = screenSize.on('lg', function(match){
        tableCtrl.media_lg = match;
    });
    tableCtrl.media_md = screenSize.on('md', function(match){
        tableCtrl.media_md = match;
    });
    tableCtrl.media_sm = screenSize.on('sm', function(match){
        tableCtrl.media_sm = match;
    });
    tableCtrl.media_xs = screenSize.on('xs', function(match){
        tableCtrl.media_xs = match;
    });
    
    tableCtrl.showDetail = function(item){
        if(!tableCtrl.desktop){
            item.show = !item.show;
        }
    }

    tableCtrl.smartTableData = [{"engine":"Trident","browser":"Internet Explorer 4.0","platform":"Win 95+","version":"4","gradeStyle":"X"},{"engine":"Trident","browser":"Internet Explorer 5.0","platform":"Win 95+","version":"5","gradeStyle":"C"},{"engine":"Trident","browser":"Internet Explorer 5.5","platform":"Win 95+","version":"5.5","gradeStyle":"A"},{"engine":"Trident","browser":"Internet Explorer 6","platform":"Win 98+","version":"6","gradeStyle":"A"},{"engine":"Trident","browser":"Internet Explorer 7","platform":"Win XP SP2+","version":"7","gradeStyle":"A"},{"engine":"Trident","browser":"AOL browser (AOL desktop)","platform":"Win XP","version":"6","gradeStyle":"A"},{"engine":"Gecko","browser":"Firefox 1.0","platform":"Win 98+ / OSX.2+","version":"1.7","gradeStyle":"A"},{"engine":"Gecko","browser":"Firefox 1.5","platform":"Win 98+ / OSX.2+","version":"1.8","gradeStyle":"A"},{"engine":"Gecko","browser":"Firefox 2.0","platform":"Win 98+ / OSX.2+","version":"1.8","gradeStyle":"A"},{"engine":"Gecko","browser":"Firefox 3.0","platform":"Win 2k+ / OSX.3+","version":"1.9","gradeStyle":"A"},{"engine":"Gecko","browser":"Camino 1.0","platform":"OSX.2+","version":"1.8","gradeStyle":"A"},{"engine":"Gecko","browser":"Camino 1.5","platform":"OSX.3+","version":"1.8","gradeStyle":"A"},{"engine":"Gecko","browser":"Netscape 7.2","platform":"Win 95+ / Mac OS 8.6-9.2","version":"1.7","gradeStyle":"A"},{"engine":"Gecko","browser":"Netscape browser 8","platform":"Win 98SE+","version":"1.7","gradeStyle":"A"},{"engine":"Gecko","browser":"Netscape Navigator 9","platform":"Win 98+ / OSX.2+","version":"1.8","gradeStyle":"A"},{"engine":"Gecko","browser":"Mozilla 1.0","platform":"Win 95+ / OSX.1+","version":"1","gradeStyle":"A"},{"engine":"Gecko","browser":"Mozilla 1.1","platform":"Win 95+ / OSX.1+","version":"1.1","gradeStyle":"A"},{"engine":"Gecko","browser":"Mozilla 1.2","platform":"Win 95+ / OSX.1+","version":"1.2","gradeStyle":"A"},{"engine":"Gecko","browser":"Mozilla 1.3","platform":"Win 95+ / OSX.1+","version":"1.3","gradeStyle":"A"},{"engine":"Gecko","browser":"Mozilla 1.4","platform":"Win 95+ / OSX.1+","version":"1.4","gradeStyle":"A"},{"engine":"Gecko","browser":"Mozilla 1.5","platform":"Win 95+ / OSX.1+","version":"1.5","gradeStyle":"A"},{"engine":"Gecko","browser":"Mozilla 1.6","platform":"Win 95+ / OSX.1+","version":"1.6","gradeStyle":"A"},{"engine":"Gecko","browser":"Mozilla 1.7","platform":"Win 98+ / OSX.1+","version":"1.7","gradeStyle":"A"},{"engine":"Gecko","browser":"Mozilla 1.8","platform":"Win 98+ / OSX.1+","version":"1.8","gradeStyle":"A"},{"engine":"Gecko","browser":"Seamonkey 1.1","platform":"Win 98+ / OSX.2+","version":"1.8","gradeStyle":"A"},{"engine":"Gecko","browser":"Epiphany 2.20","platform":"Gnome","version":"1.8","gradeStyle":"A"},{"engine":"Webkit","browser":"Safari 1.2","platform":"OSX.3","version":"125.5","gradeStyle":"A"},{"engine":"Webkit","browser":"Safari 1.3","platform":"OSX.3","version":"312.8","gradeStyle":"A"},{"engine":"Webkit","browser":"Safari 2.0","platform":"OSX.4+","version":"419.3","gradeStyle":"A"},{"engine":"Webkit","browser":"Safari 3.0","platform":"OSX.4+","version":"522.1","gradeStyle":"A"},{"engine":"Webkit","browser":"OmniWeb 5.5","platform":"OSX.4+","version":"420","gradeStyle":"A"},{"engine":"Webkit","browser":"iPod Touch / iPhone","platform":"iPod","version":"420.1","gradeStyle":"A"},{"engine":"Webkit","browser":"S60","platform":"S60","version":"413","gradeStyle":"A"},{"engine":"Presto","browser":"Opera 7.0","platform":"Win 95+ / OSX.1+","version":"-","gradeStyle":"A"},{"engine":"Presto","browser":"Opera 7.5","platform":"Win 95+ / OSX.2+","version":"-","gradeStyle":"A"},{"engine":"Presto","browser":"Opera 8.0","platform":"Win 95+ / OSX.2+","version":"-","gradeStyle":"A"},{"engine":"Presto","browser":"Opera 8.5","platform":"Win 95+ / OSX.2+","version":"-","gradeStyle":"A"},{"engine":"Presto","browser":"Opera 9.0","platform":"Win 95+ / OSX.3+","version":"-","gradeStyle":"A"},{"engine":"Presto","browser":"Opera 9.2","platform":"Win 88+ / OSX.3+","version":"-","gradeStyle":"A"},{"engine":"Presto","browser":"Opera 9.5","platform":"Win 88+ / OSX.3+","version":"-","gradeStyle":"A"},{"engine":"Presto","browser":"Opera for Wii","platform":"Wii","version":"-","gradeStyle":"A"},{"engine":"Presto","browser":"Nokia N800","platform":"N800","version":"-","gradeStyle":"A"},{"engine":"Presto","browser":"Nintendo DS browser","platform":"Nintendo DS","version":"8.5","gradeStyle":"C/A1"},{"engine":"KHTML","browser":"Konqureror 3.1","platform":"KDE 3.1","version":"3.1","gradeStyle":"C"},{"engine":"KHTML","browser":"Konqureror 3.3","platform":"KDE 3.3","version":"3.3","gradeStyle":"A"},{"engine":"KHTML","browser":"Konqureror 3.5","platform":"KDE 3.5","version":"3.5","gradeStyle":"A"},{"engine":"Tasman","browser":"Internet Explorer 4.5","platform":"Mac OS 8-9","version":"-","gradeStyle":"X"},{"engine":"Tasman","browser":"Internet Explorer 5.1","platform":"Mac OS 7.6-9","version":"1","gradeStyle":"C"},{"engine":"Tasman","browser":"Internet Explorer 5.2","platform":"Mac OS 8-X","version":"1","gradeStyle":"C"},{"engine":"Misc","browser":"NetFront 3.1","platform":"Embedded devices","version":"-","gradeStyle":"C"},{"engine":"Misc","browser":"NetFront 3.4","platform":"Embedded devices","version":"-","gradeStyle":"A"},{"engine":"Misc","browser":"Dillo 0.8","platform":"Embedded devices","version":"-","gradeStyle":"X"},{"engine":"Misc","browser":"Links","platform":"Text only","version":"-","gradeStyle":"X"},{"engine":"Misc","browser":"Lynx","platform":"Text only","version":"-","gradeStyle":"X"},{"engine":"Misc","browser":"IE Mobile","platform":"Windows Mobile 6","version":"-","gradeStyle":"C"},{"engine":"Misc","browser":"PSP browser","platform":"PSP","version":"-","gradeStyle":"C"},{"engine":"Other browsers","browser":"All others","platform":"-","version":"-","gradeStyle":"U"}];

    tableCtrl.showing = angular.copy(tableCtrl.smartTableData);
            
  }]);
