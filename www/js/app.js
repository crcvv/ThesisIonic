// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom');
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.single', {
    url: '/contacts/:contactId',
    views: {
      'menuContent': {
        templateUrl: 'templates/contact.html',
        controller: 'ContactCtrl'
      }
    }
  })

  .state('app.tabs', {
    url: '/tabs',
    abstract: true,
    views: {
      'menuContent': {
        templateUrl: 'templates/tabs.html'
      }
    }
  })

  .state('app.tabs.contactslist', {
    url: '/contactslist',
    views: {
      'tab-contactslist': {
        templateUrl: 'templates/contactslist.html',
        controller: 'ContactslistCtrl'
      }
    }
  })

  .state('app.tabs.camera', {
    url: '/camera',
    views: {
      'tab-camera': {
        templateUrl: 'templates/camera.html',
        controller: 'CameraCtrl'
      }
    }
  })

  .state('app.tabs.about', {
    url: '/about',
    views: {
      'tab-about': {
        templateUrl: 'templates/about.html'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/tabs/contactslist');
});
