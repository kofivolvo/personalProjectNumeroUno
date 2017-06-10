angular.module('bestAppEver', ['ui.router', 'ngMaterial', 'ngAnimate', 'ui.bootstrap'])


  .config(function($stateProvider, $urlRouterProvider) {



    $urlRouterProvider
      .otherwise('/')



    $stateProvider

      .state('home', {

        url: '/',
        templateUrl: '../html/home.html'
      })

      .state('circuts', {
        url: '/circuts',
        templateUrl: '../html/circuts.html',
        controller: function($scope) {
          var map = new window.google.maps.Map(document.getElementById('map'), {
            center: {
              lat: 43.7384,
              lng: 7.4246
            },
            zoom: 3
          });
        }

      })


      .state('races', {

        url: '/races',
        templateUrl: '../html/races.html',
        controller: function($scope, mainSrv) {


         mainSrv.racesList().then(function(response){
            console.log(response);
            $scope.races = response;
          })


          }
        })

      .state('race', {

        url: '/race',
        templateUrl: '../html/race.html'
      })


      .state('drivers', {

        url: '/drivers',
        templateUrl: '../html/drivers.html'
      })

      .state('driver', {

        url: '/driver',
        templateUrl: '../html/driver.html'
      })









  })
