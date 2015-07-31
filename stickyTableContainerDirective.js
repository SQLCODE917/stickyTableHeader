(function () {
  'use strict';
  
  angular.module('stickyHeaderTable.ContainerDirective', [])
    .directive('stickyTableContainer', directive);
    
  function directive() {
    var table, 
    tableHead,
    stickyHead,
    stickyTable;
    
    // do not set the scope of this directive - let the controller instance become the scope!
    return {
      restrict: 'A',
      controller: 'stickyTableController',
      controllerAs: 'vm',
      bindToController: true,
      compile: function (tElement, tAttrs) {
        table = tElement.find('table');
        tableHead = table.find('thead');
        
        //Allow the table headers to find their match and register together
        var allTableHeaders = tableHead.find('th');
        allTableHeaders.attr('sticky-table-header', 'table');
        
        stickyHead = tableHead.clone();
        var allStickyHeaders = stickyHead.find('th');
        allStickyHeaders.attr('sticky-table-header', 'sticky');
        
        tElement.prepend(stickyHead);
        stickyHead.wrap('<table class="stickyTable" ng-class="{remainInSight: vm.scrolledToTheHeader}"></table>');
        stickyTable = stickyHead.parent();
        
        //Allow the tabes to find their match and register together
        table.attr('sticky-table', 'table');
        stickyTable.attr('sticky-table', 'sticky');
      }
    };
  }
})();