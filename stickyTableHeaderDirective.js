(function () {
  'use strict';
  
  angular.module('stickyHeaderTable.stickyTableHeader', [])
    .directive('stickyTableHeader', directive);
    
  function directive () {
    return {
      restrict: 'A',
      require: '^stickyTableContainer',
      link: function (scope, iElement, iAttrs, stickyTableController) {
        var index = iElement.index();
        stickyTableController.registerStickyHeader(iElement, iAttrs.stickyTableHeader, index);
      }
    };
  }
})();