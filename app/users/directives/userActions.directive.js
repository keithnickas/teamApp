(function()
  {
    'use strict';

    angular
      .module('app.users')
      .directive('taglibUserActions', taglibUserActions);

    function taglibUserActions() 
    {
      return {
        templateUrl: 'views/users/directives/userActions.html',
        restrict: 'E',
        controller: UserActionsController,
        controllerAs: 'vm',
        bindToController: true,
        scope: 
        {
          users: '='
        }
      };
    }

    UserActionsController.$inject = ['userService'];

    function UserActionsController(userService)
    {
      var vm = this;
    }
  }
)();