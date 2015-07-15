angular.module('won.settings', [])

  .controller('SettingsCtrl', function ($scope, $ionicLoading) {
    $scope.scale = 'F';
    $scope.precision = 1;

    $scope.randomScale = function () {
      $ionicLoading.show({
        template: '<img src="img/whatshappening.gif">',
        duration: 5000
      });
    };

  });
