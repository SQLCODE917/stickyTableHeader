(function () {
  'use strict';
  
  angular.module('stickyHeaderTable.stickyTableHeaderRow', [])
    .directive('stickyTable', directive);
    
  function directive () {
    return {
      restrict: 'A',
      require: '^stickyTableContainer',
      link: function (scope, iElement, iAttrs, stickyTableController) {
        stickyTableController.registerTable(iElement, iAttrs.stickyTable);
      }
    };
  }
})();