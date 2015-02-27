'use strict';

/**
 * @ngdoc overview
 * @name dashingMotorApp
 * @description
 * # dashingMotorApp
 *
 * Main module of the application.
 */
angular
  .module('dashingMotorApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mgcrea.ngStrap',
    'nvd3'
  ])
  .config(['$routeProvider','$logProvider',function ($routeProvider, $logProvider) {
    $logProvider.debugEnabled(true);

    $routeProvider
      .when('/home', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/dash/sin', {
        templateUrl: 'views/dash/sin.html',
        controller: 'DashSinCtrl'
      })
      .when('/dash/fft', {
        templateUrl: 'views/dash/fft.html',
        controller: 'DashFftCtrl'
      })
      .otherwise({
        redirectTo: '/home'
      });
  }]);
