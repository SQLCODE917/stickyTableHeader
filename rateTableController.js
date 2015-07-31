(function () {
  'use strict';
  
  angular.module('rateTable.rateTableController', [])
    .controller('rateTableController', controller);
    
  controller.$inject = ['tableDataService'];
  
  function controller (dataService) {
    var vm = this;
    vm.subjects = dataService(150);
    return vm;
  }
})();