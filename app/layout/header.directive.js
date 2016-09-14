(function()
  {
    'use strict';

    angular
      .module('app.layout')
      .directive('taglibHeader', taglibHeader);

    function taglibHeader()
    {
      return {
        templateUrl: 'views/layout/header.html',
        restrict: 'E',
        scope: {},
        controller: HeaderController,
        controllerAs: 'vm'
      };
    }

    HeaderController.$inject = ['$location', 'authService'];

    function HeaderController($location, authService)
    {
      var vm = this;

      vm.isLoggedIn = authService.isLoggedIn;
      vm.logout = logout;

      function logout()
      {
        authService.logout();
        $location.path('/');
      }
    }
  }
)();