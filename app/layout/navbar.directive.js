(function()
  {
    'use strict';

    angular
      .module('app.layout')
      .directive('taglibNavbar', taglibNavbar);

    function taglibNavbar()
    {
      return {
        templateUrl: 'views/layout/navbar.html',
        restrict: 'E',
        scope: {},
        controller: NavbarController,
        controllerAs: 'vm'
      };
    }

    NavbarController.$inject = ['$location', 'authService'];

    function NavbarController($location, authService)
    {
      var vm = this;

      vm.isLoggedIn = authService.isLoggedIn;

      function nav()
      {
        authService.logout();
        vm.showNavbar = true;
      }
    }
  }
)();