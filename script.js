(function() {
  'use strict';
  
  angular.module('tableApp', [
    'rateTable',
    'stickyHeaderTable'
  ]);
  
  angular.module('stickyHeaderTable', [
    'stickyHeaderTable.ContainerController',
    'stickyHeaderTable.ContainerDirective',
    'stickyHeaderTable.stickyTableHeader',
    'stickyHeaderTable.stickyTableHeaderRow'
    ]);
    
  angular.module('rateTable', [
    'rateTable.tableDataService',
    'rateTable.rateTableController'
  ]);
})();