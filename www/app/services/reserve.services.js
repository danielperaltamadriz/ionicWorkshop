(function(){
        "use strict";
        angular
            .module('app.core')
            .factory('reserveService', reserveService);
        function reserveService($firebaseArray) {
                var reserveLists;
                var ref;
                var service = {
                        init:init,
                        addReserve: addReserve,
                        getReserves: getReserves
                };
                return service;

                function init() {
                        ref = firebase.database().ref().child('reserves');
                        reserveLists = $firebaseArray(ref);
                }

                function addReserve(reserve){
                        reserveLists.$add(reserve);
                }

                function getReserves(){
                        return reserveLists;
                }
        }
})();