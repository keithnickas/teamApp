(function()
  {
    'use strict';

    angular
      .module('app.layout')
      .directive('taglibFooter', taglibFooter);

    function taglibFooter()
    {
      return {
        templateUrl: 'views/layout/footer.html',
        restrict: 'E',
        scope: {},
        controller: FooterController,
        controllerAs: 'vm'
      };
    }

    FooterController.$inject = ['$location'];

    function FooterController($location)
    {
      var vm = this;
    }
  }
)();