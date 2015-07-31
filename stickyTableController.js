(function () {
  'use strict';
  
  angular.module('stickyHeaderTable.ContainerController', [])
    .controller('stickyTableController', controller);
    
    controller.$inject = ['$scope'];
    
  function controller (scope) {
    var viewport = $(window);
    
    var stickyHeaders = [];
    var tableHeaders = [];
    var table;
    var stickyTable;
    
    var unwatches = [];
    
    var vm = this;
    vm.linkHeaders = linkHeaders;
    vm.linkTables = linkTables;
    vm.registerStickyHeader = registerStickyHeader;
    vm.registerTable = registerTable;
    vm.scrolledToTheHeader = false;
    return vm;
    
    function linkHeaders (tableHeader, stickyHeader) {
      return scope.$watch(function () { return tableHeader.width();}, 
      function (newWidth) { stickyHeader.css({width: Math.floor(newWidth) + "px"});});
    }
    
    function linkTables (tableRow, stickyTableRow) {
      viewport.on('resize', function () {
        scope.$apply(stickyTableRow.css({width: Math.floor(tableRow.width()) + "px"}));
      });
      return function () {
        viewport.off('resize');
      };
    }

    function registerStickyHeader (header, tableOrSticky, index) {
      var unwatch;
      if(tableOrSticky === 'table') {
        tableHeaders[index] = header;
        if (stickyHeaders[index]) {
          unwatch = linkHeaders(header, stickyHeaders[index]);
          unwatches.push(unwatch);
        }
      } else {
        stickyHeaders[index] = header;
        if (tableHeaders[index]) {
          unwatch = linkHeaders(tableHeaders[index], header);
          unwatches.push(unwatch);
        }
      }
    }
    
    function registerTable (_table, tableOrSticky) {
      var unwatch;
      if (tableOrSticky === 'table') {
        table = _table;
        if (stickyTable) {
          unwatch = linkTables(_table, stickyTable);
          unwatches.push(unwatch);
          
          var unwatchStickyBehavior = makeTableHeaderStick(_table);
          unwatches.push(unwatchStickyBehavior);
        } 
      } else {
        stickyTable = _table;
        
        if (table) {
          unwatch = linkTables(table, _table);
          unwatches.push(unwatch);
        }
      }
    }
    
    function makeTableHeaderStick(table) {
      viewport.on('scroll', function () {
        scope.$apply(vm.scrolledToTheHeader = window.pageYOffset > table.offset().top);
      });
      return function () {
        viewport.off('scroll');
      };
    }
  }
})();