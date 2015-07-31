(function () {
  'use strict';
  
  angular.module('rateTable.tableDataService', [])
    .factory('tableDataService', dataService);
    
  function dataService() {
    return getData;
    
    function getData (amount) {
      var payload = [];
      var i = 0;
      
      for (; i < amount; i++) {
        var record = {};
        record.name = 'Subject ' + i;
        record.age = Math.floor(Math.random() * (100 + 1));
        record.rank = Math.floor(Math.random() * (5 + 1));
        record.rate = Math.floor(Math.random() * (1000 + 1));
        payload.push(record);
      }
      
      return payload;
    }
  }
})();