angular.module('won.weather', [])

  .controller('WeatherCtrl', function ($scope, $stateParams, $http, $ionicLoading) {

    $scope.city = $stateParams.city;

    $ionicLoading.show({
      template: '<img src="http://i.imgur.com/EeE1Lsp.gif"><h1>Loading...</h1>'
    });

    $http
      .get('/api/forecast/' + $stateParams.lat + ',' + $stateParams.long)
      .success(function (data) {
        setTimeout(function () {
          $scope.current = data.currently;
          $ionicLoading.hide();
        }, 2000);
      });

  });
