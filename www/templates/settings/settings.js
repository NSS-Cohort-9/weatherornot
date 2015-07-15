angular.module('won.settings', [])

  .controller('SettingsCtrl', function (settings, $scope, $ionicLoading) {
    $scope.scale = settings.scale;
    $scope.precision = settings.precision;

    $scope.randomScale = function () {
      $ionicLoading.show({
        template: '<img src="img/whatshappening.gif">',
        duration: 5000
      });
    };

  })

  .factory('settings', function () {
    return {
      scale: 'F',
      precision: 1
    };
  });
