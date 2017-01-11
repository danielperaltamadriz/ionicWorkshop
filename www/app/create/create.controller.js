(function() {
  'use strict';
  angular
      .module('app.create')
      .controller('CreateCtrl', CreateCtrl);
  /* @ngInject */
  function CreateCtrl(reserveService) {
    var vm = this;
    vm.create = create;
    activate();
    function activate(){
      vm.activity = {
        name: '',
        date: Date.now(),
        reason: ''
      };
    }
    function create() {
      console.log(JSON.stringify(vm.activity));
      reserveService.addReserve(vm.activity);
    }
  }
})();
