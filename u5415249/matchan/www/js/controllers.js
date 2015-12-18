// angular.module('starter.controllers', [])
angular.module('starter.controllers', ['starter.services','firebase'])

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
})

.controller('PlaylistsCtrl', function($scope, OtherFriends ,$ionicPopup) {
 $scope.otherfriends = OtherFriends.all();



 $scope.searchMovieDB = function() {
  
    OtherFriends.all($scope.otherfriends.name, function(movies) {
      $scope.movies = movies;
    });
      
  };

      $scope.showAlert = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Favorite',
     template: 'Mark as Favorite'

   });
   alertPopup.then(function(res) {
     console.log('Thank you for not eating my delicious ice cream cone');
     window.localStorage['_ListOfItem.json'] = JSON.stringify($scope.indexFile);
   });
 };




})

// .controller("LoginCtrl", function($scope, $rootScope, $firebase, $firebaseSimpleLogin) {
//   // Get a reference to the Firebase
//   // TODO: Replace "ionic-demo" below with the name of your own Firebase
//   var firebaseRef = new Firebase("https://ionic-demo.firebaseio.com/");
//   // Create a Firebase Simple Login object
//   $scope.auth = $firebaseSimpleLogin(firebaseRef);
//   // Initially set no user to be logged in
//   $scope.user = null;
//   // Logs a user in with inputted provider
//   $scope.login = function(provider) {
//     $scope.auth.$login(provider);
//   };
//   // Logs a user out
//   $scope.logout = function() {
//     $scope.auth.$logout();
//   };
//   // Upon successful login, set the user object
//   $rootScope.$on("$firebaseSimpleLogin:login", function(event, user) {
//     $scope.user = user;
//   });
//   // Upon successful logout, reset the user object
//   $rootScope.$on("$firebaseSimpleLogin:logout", function(event) {
//     $scope.user = null;
//   });
//   // Log any login-related errors to the console
//   $rootScope.$on("$firebaseSimpleLogin:error", function(event, error) {
//     console.log("Error logging user in: ", error);
//   });
// })

.controller('LoginCtrl', function($scope, Auth) {

$scope.login = function() {
    Auth.$authWithOAuthRedirect("facebook").then(function(authData) {
      // User successfully logged in
    }).catch(function(error) {
      if (error.code === "TRANSPORT_UNAVAILABLE") {
        Auth.$authWithOAuthPopup("facebook").then(function(authData) {
          // User successfully logged in. We can log to the console
          // since we’re using a popup here
          console.log(authData);
        });
      } else {
        // Another error occurred
        console.log(error);
      }
    });
};

Auth.$onAuth(function(authData) {
  if (authData === null) {
    console.log("Not logged in yet");
  } else {
    console.log("Logged in as", authData.uid);
  }
  $scope.authData = authData; // This will display the user's name in our view
});
})

.controller("GalleryCtrl", function($scope) {
 
    $scope.images = [];
 
    $scope.loadImages = function() {
        for(var i = 1; i <= 10; i++) {
            $scope.images.push({id: i, src: "/img/30cafe/1_pancake cafe/img" + i + ".jpg"});
        }
    }
 
})

// .controller('LoginCtrl', function ($scope, Users , $state) {
//     $scope.login = function (_username, _password) {
//         Users.login(_username, _password) ;

//     };
// })

.controller('PlaylistCtrl', function($scope, Playlists ,  $ionicPopup , $stateParams) {
  var playlistId = $stateParams.playlistId;

  $scope.playlist = Playlists.get(playlistId);

  $scope.items = Playlists;
  
   $scope.addcomment = function() {
    var name = prompt("Comment");
    if (name) {
      $scope.items.$add({
        "comment": comment
      });
    }
  };
    
  $scope.showAlert = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Favorite',
     template: 'Mark as Favorite'
   });
   alertPopup.then(function(res) {
     console.log('Thank you for not eating my delicious ice cream cone');
   });
 };




});
