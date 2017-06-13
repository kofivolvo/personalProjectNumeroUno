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
        controller: function($scope, mainSrv) {
          var map = new window.google.maps.Map(document.getElementById('map'), {
            center: {
              lat: 43.7384,
              lng: 7.4246
            },
            zoom: 3
          });

          var locations = [
            ['Albert Park Grand Prix Circuit',-37.8497,144.968,10],
            ['Bahrain International Circuit',26.0325,50.5106],
            ['Circuit de Monaco',43.7347,7.42056],
            ['Silverstone Circuit',52.0786,-1.01694],
            ['Hockenheimring',49.3278,8.56583],
            ['Circuit de Spa-Francorchamps',50.4372,5.97139],
            ['Fuji Speedway',35.3717,138.927],
            ['Shanghai International Circuit',31.3389,121.22],
            ['Yas Marina Circuit',24.4672,54.6031],
            ['Fair Park',32.7774,-96.7587],
            ['Prince George Circuit',-33.0486,27.8736],
            ['Circuit of the Americas',30.1328,-97.6411,],
            ['Indianapolis Motor Speedway',39.795,-86.2347]

          ]

          var infowindow = new google.maps.InfoWindow();

            var marker, i;

           for (i = 0; i < locations.length; i++) {
               marker = new google.maps.Marker({
               position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                 map: map
               });

               google.maps.event.addListener(marker, 'click', (function(marker, i) {
                 return function() {
                   infowindow.setContent(locations[i][0]);
                   infowindow.open(map, marker);
                 }
               })(marker, i));
             }









        }

      })


      .state('races', {

        url: '/races',
        templateUrl: '../html/races.html',
        controller: function($scope, mainSrv) {


         mainSrv.racesList().then(function(response){
            //console.log(response);
            $scope.races = response;

          })

          // mainSrv.dateList().then(function(response){
          //    console.log(response);
          //    $scope.dropList = response.sort(function(a,b){
          //     return a-b;
          //    });
          //  })


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
