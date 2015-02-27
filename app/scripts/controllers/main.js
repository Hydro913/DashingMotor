'use strict';

/**
 * @ngdoc function
 * @name dashingMotorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dashingMotorApp
 */
angular.module('dashingMotorApp')
  .controller('MainCtrl', ['$scope', '$log', function ($scope, $log) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $log.log('Test');

    $scope.isActive = function (viewLocation) {
      $log.log('DashFftCtrl ' + $location.path());
      return viewLocation === $location.path();
    };

  }]);
