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
    'nvd3'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/dash', {
        templateUrl: 'views/dash.html',
        controller: 'DashCtrl'
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
        redirectTo: '/'
      });
  });
