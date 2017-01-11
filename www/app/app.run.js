(function() {
  'use strict';

  angular
      .module('app')
      .run(run);

  /* @ngInject */
  function run($ionicPlatform) {
    var config = {
      apiKey: "AIzaSyCMqQYGL3L8VbaPeMrJBWYcblkyaPlgwP4",
      authDomain: "activities-de298.firebaseapp.com",
      databaseURL: "https://activities-de298.firebaseio.com",
      storageBucket: "activities-de298.appspot.com",
      messagingSenderId: "695890432512"
    };
    firebase.initializeApp(config);

    $ionicPlatform.ready(function() {

      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }

    });
  }

})();
