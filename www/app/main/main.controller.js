(function() {
  'use strict';
  angular
      .module('app.main')
      .controller('MainCtrl', MainCtrl);
  /* @ngInject */
  function MainCtrl(reserveService) {
    var vm = this;
    vm.getReserves = reserveService.getReserves;
    activate();
    function activate() {
      reserveService.init();
    }
  }
})();
