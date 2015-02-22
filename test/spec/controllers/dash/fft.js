'use strict';

describe('Controller: DashFftCtrl', function () {

  // load the controller's module
  beforeEach(module('dashingMotorApp'));

  var DashFftCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DashFftCtrl = $controller('DashFftCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
