'use strict';

describe('Controller: DashSinCtrl', function () {

  // load the controller's module
  beforeEach(module('dashingMotorApp'));

  var DashSinCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DashSinCtrl = $controller('DashSinCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
