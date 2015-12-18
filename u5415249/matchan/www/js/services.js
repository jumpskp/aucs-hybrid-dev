angular.module('starter.services', ['firebase'])

// .value('SOCKET_URL', 'http://192.168.0.5:8101')

.factory('OtherFriends', function ($firebaseArray) {

  var ref = new Firebase("https://dazzling-fire-747.firebaseio.com/Cafe");
  var self = this;
  
  self.all = function() {
      return $firebaseArray(ref);
 
  }

  self.get = function(playlistId){
    return $firebaseArray(ref);
  }

   return self;

})

  .factory('Auth', function($firebaseAuth) {
 var usersRef = new Firebase("https://dazzling-fire-747.firebaseio.com/users");
  return $firebaseAuth(usersRef);
  })


.factory('Users', function ($window, $firebaseObject, $firebaseArray, $timeout, $state, $ionicPopup) {
    var UserRef = new Firebase("https://dazzling-fire-747.firebaseio.com/User");

    return {
        all: function () {
            return $firebaseArray(UserRef);
        },

        login: function (_username, _password) {
            var check = false;
            UserRef.once("value", function (snapshot) {
                // The callback function will only get called once since we return true
                snapshot.forEach(function (childSnapshot) {
                    var key = childSnapshot.val();
                    if (key.username == _username && key.password == _password) {
                        console.log('true');
                        window.sessionStorage.username = _username;
                        check = true;
                        $state.go('app.playlists');
                    }
                });
                if (check == false) {
                    var alertPopup = $ionicPopup.alert({
                        title: 'Error',
                        template: 'Wrong Id or Password (Case Sensitive)'
                    });
                    alertPopup.then(function (res) {
                        console.log('-----');
                    });
                }
            });
        }
    };
})

.factory('Playlists', function(){
  var self = this;

  var playlists = [];
  playlists[playlists.length] = {
    title: 'Pancake Cafe', id: 1 , area: 'Siam', img: '/img/30cafe/1_pancake cafe/img1.jpg'
  };
  playlists[playlists.length] = {
   title: 'Seobiggo', id: 2 , area: 'Siam', img: '/img/30cafe/2_seobinggo/img1.jpg'
  };
  playlists[playlists.length] = {
   title: 'Jaiyen Cafe', id: 3 , area: 'Thonglor', img: '/img/30cafe/3_jaiyen cafe/img1.jpg'
  };
  playlists[playlists.length] = {
   title: 'White Day Patsseries', id: 4 , area: 'Ratchapluek', img: '/img/30cafe/4_white day patsseries/img1.jpg'
  };
  
  playlists[playlists.length] = {
    title: 'Simple Day Cafe', id: 5, area: 'Ratchapluek', img: '/img/30cafe/5_simple day cafe/img1.jpg'
  };
  playlists[playlists.length] = {
   title: 'Secret Garden', id: 6, area: 'Sathorn', img: '/img/30cafe/6_secret garden/img1.jpg'
  };
  
  playlists[playlists.length] = {
   title: 'Bang Waan', id: 7 , area: 'Rama 9', img: '/img/30cafe/7_bang waan/img1.jpg'
  };
  playlists[playlists.length] = {
  title: 'Cookie Crust', id: 8 , area: 'Rama 9', img: '/img/30cafe/8_cookies crust/img1.jpg'

  };
  playlists[playlists.length] = {
   title: 'Melt Me', id: 9 , area: 'Thonglor', img: '/img/30cafe/9_melt me/img1.jpg'
  };
  playlists[playlists.length] = {
  title: 'Size S Coffee and Bakery', id: 10 , area: 'Sathorn', img: '/img/30cafe/10_size s coffe and bakery/img1.jpg' 
    
  };
  playlists[playlists.length] = {
  title: 'Nikko Cafe', id: 11 , area: 'Ekkamai', img: '/img/30cafe/11_nikko cafe/img1.jpg'
  };
  playlists[playlists.length] = {

     title: 'Roots Coffee Roaste', id: 12 , area: 'Ekkamai', img: '/img/30cafe/12_roots coffee roaster/img1.jpg'
  };
  playlists[playlists.length] = {

     title: 'Little Spoon', id: 13 , area: 'Ekkamai', img: '/img/30cafe/13_little spoon/img1.jpg'
  };
  playlists[playlists.length] = {

     title: '(Un) Fashion Cafe', id: 14 , area: 'Ekkamai', img: '/img/30cafe/14_(un)fashion cafe/img1.jpg'
  };
  
  playlists[playlists.length] = {

     title: 'iBerry Cafe', id: 15 , area: 'Siam', img: '/img/30cafe/15_iberry cafe/img1.jpg'
  };
  playlists[playlists.length] = {

     title: 'Porcupire', id: 16 , area: 'Ari', img: '/img/30cafe/16_porcupire/img1.jpg'
  };
  
  playlists[playlists.length] = {

     title: 'Hungry Bear', id: 17, area: 'Lad Prao', img: '/img/30cafe/17_hungry bear/img1.jpg'
  };
  playlists[playlists.length] = {

     title: 'One Ounce for Onion', id: 18 , area: 'Ekkamai', img: '/img/30cafe/18_one ounce for onion/img1.jpg'
  };
  
  playlists[playlists.length] = {

     title: 'Pancake Cafe', id: 19 , area: 'Ratchadumri', img: '/img/30cafe/19_cupcake love/img1.jpg'
  };
  playlists[playlists.length] = {

     title: 'Hello Kitty', id: 20 , area: 'Siam', img: '/img/30cafe/20_hello kitty/img1.jpg'
  };
  playlists[playlists.length] = {

     title: 'Think Cafe', id: 21 , area: 'Ratchapluek', img: '/img/30cafe/21_think cafe/img1.jpg'
  };
  playlists[playlists.length] = {

     title: 'Misster Cafe by Davika', id: 22 , area: 'Sukapiban', img: '/img/30cafe/22_misster cafe by davika/img1.jpg'
  };
  playlists[playlists.length] = {

     title: 'After You Dessert', id: 23 , area: 'Siam', img: '/img/30cafe/23_after you dessert/img1.jpg'
  };
  playlists[playlists.length] = {

     title: 'Farm Design', id: 24, area: 'Rama 9', img: '/img/30cafe/24_farm design/img1.jpg' 
  };
  
  playlists[playlists.length] = {

     title: 'Cheesecake house', id: 25 , area: 'Thonglor', img: '/img/30cafe/25_cheesecake house/img1.jpg'
  };
  playlists[playlists.length] = {

     title: 'Sfree', id: 26 , area: 'Rama 9', img: '/img/30cafe/26_sfree/img1.jpg'
  };
  
  playlists[playlists.length] = {

     title: 'ETC. Cafe', id: 27 , area: 'Rama 9', img: '/img/30cafe/27_etc cafe/img1.jpg'
  };
  playlists[playlists.length] = {

     title: 'Coffee Bean By Dao', id: 28 , area: 'Siam', img: '/img/30cafe/28_coffee bean by dao/img1.jpg'
  };
  
  playlists[playlists.length] = {

     title: 'Charlie Brown', id: 29 , area: 'Bang Ple', img: '/img/30cafe/29_charlie brown/img1.jpg'
  };
  playlists[playlists.length] = {

     title: 'Amtissimo', id: 30, area: 'Rama 9', img: '/img/30cafe/30_amatissimo/img1.jpg'
  };
  


  self.all = function(){
    return playlists;
  }

  self.getCount = function(){
    return playlists[playlists.length-1].id ;
  }

  self.get = function(playlistId){
    for(var i in playlists){
      var playlist = playlists[i]
      if(playlist.id == playlistId){
        return playlist;
      }
    }
  }

  self.remove = function(playlist){
    playlists.splice(playlists.indexOf(playlist),1);
  }

  self.add = function(playlistObj){
    playlists[playlists.length] = playlistObj;
  }

  self.update = function(playlistUpdate){
    for(var i in playlists){
      var playlist = playlists[i];
      if(playlist.id == playlistUpdate.id){
        playlist = playlistUpdate;
        return playlist;
      }
    }
  }

  return self;
});
