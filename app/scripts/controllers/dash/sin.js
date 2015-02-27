'use strict';

/**
 * @ngdoc function
 * @name dashingMotorApp.controller:DashSinCtrl
 * @description
 * # DashSinCtrl
 * Controller of the dashingMotorApp
 */
angular.module('dashingMotorApp')
  .controller('DashSinCtrl', ['$scope', '$log', function ($scope, $log) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.isActive = function (viewLocation) {
      $log.log('DashFftCtrl ' + $location.path());
      return viewLocation === $location.path();
    };

    $scope.options = {
      chart: {
        type: 'lineChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 40,
          left: 55
        },
        x: function(d){ return d.x; },
        y: function(d){ return d.y; },
        useInteractiveGuideline: true,
        dispatch: {
          stateChange: function(e){ console.log("stateChange"); },
          changeState: function(e){ console.log("changeState"); },
          tooltipShow: function(e){ console.log("tooltipShow"); },
          tooltipHide: function(e){ console.log("tooltipHide"); }
        },
        xAxis: {
          axisLabel: 'Time (ms)'
        },
        yAxis: {
          axisLabel: 'Voltage (v)',
          tickFormat: function(d){
            return d3.format('.02f')(d);
          },
          axisLabelDistance: 30
        },
        callback: function(chart){
          console.log("!!! lineChart callback !!!");
        }
      },
      title: {
        enable: true,
        text: 'Motor Current'
      },
      subtitle: {
        enable: true,
        text: 'Show is mains current with an ideal sin wave on top',
        css: {
          'text-align': 'center',
          'margin': '10px 13px 0px 7px'
        }
      },
      caption: {
        enable: true,
        html: '<b>Figure 1.</b> Motor Current',
        css: {
          'text-align': 'justify',
          'margin': '10px 13px 0px 7px'
        }
      }
    };

    $scope.data = sinAndCos();

    /*Random Data Generator */
    function sinAndCos() {
      var sin = [],
        sin2 = [];

      //Data is represented as an array of {x,y} pairs.
      var samples_length =  100;

      for (var i = 0; i < samples_length; i++) {
        var t = i/(samples_length*20);

        sin.push({x: i, y: 15*Math.sin(60*2*Math.PI*t)});
        sin2.push({x: i, y: 15*(Math.sin(60*2*Math.PI*t) + (Math.random()-0.5)/2)});
      }

      //Line chart data should be sent as an array of series objects.
      return [
        {
          values: sin,      //values - represents the array of {x,y} data points
          key: 'Sine Wave', //key  - the name of the series.
          color: '#ff7f0e'  //color - optional: choose your own line color.
        },
        {
          values: sin2,
          key: 'Another sine wave',
          color: '#7777ff'
        }
      ];
    };
  }]);
