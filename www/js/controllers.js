angular.module('starter.controllers', ['starter.services'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

  $scope.accountList = false;

  $scope.toggleAccountList = function() {
    $scope.accountList = !$scope.accountList;
  }
})

.controller('ContactslistCtrl', function($scope, Contact) {
  $scope.contacts = Contact.all();
})

.controller('ContactCtrl', function($scope, $stateParams, Contact) {
  $scope.contact = Contact.get($stateParams['contactId']);
})

.controller('CameraCtrl', function($scope) {
  $scope.upload = {};

  function getPicture(sourceType) {
    navigator.camera.getPicture(
      function(imageData) {
        $scope.upload.picture = imageData;
        $scope.$apply();
      },
      function() {
        $scope.upload.picture = undefined;
        $scope.$apply();
      },
      {
        quality: 80,
        encodingType: Camera.EncodingType.JPEG,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: sourceType,
        saveToPhotoAlbum: false
      }
    );
  }

  $scope.takePicture = function() {
   getPicture(Camera.PictureSourceType.CAMERA);
  };

  $scope.selectPicture = function() {
    getPicture(Camera.PictureSourceType.PHOTOLIBRARY);
  };
})

.controller('MailCtrl', function($scope) {
  $scope.emails = [
    { name: 'Totoro', preview: "Movie night tonight?", img: "totoro.png" },
    { name: 'Bill Doe', preview: "Book you recommended", img: "license-to-ill.jpg" },
    { name: 'Ghostbusters Slimer', preview: "Who ya gonna call?", img: "slimer.jpg" },
    { name: 'Totoro', preview: "Movie night tonight?", img: "totoro.png" }
  ];
});