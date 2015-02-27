'use strict';

/**
 * @ngdoc function
 * @name dashingMotorApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dashingMotorApp
 */
angular.module('dashingMotorApp')
  .controller('AboutCtrl', ['$scope', '$log', function ($scope,$log) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var isActive = function (viewLocation) {
      console.log('DashFftCtrl ' + $location.path());
      $log.log('DashFftCtrl ' + $location.path());
      return viewLocation === $location.path();
    };

    $scope.isActive = function (viewLocation) {
      console.log('DashFftCtrl ' + $location.path());
      $log.log('DashFftCtrl ' + $location.path());
      return viewLocation === $location.path();
    };

  }]);
