(function()
  {
    'use strict';

    angular
      .module('app.users')
      .directive('taglibUserForm', taglibUserForm);

    function taglibUserForm() 
    {
      return {
        templateUrl: 'views/users/directives/userForm.html',
        restrict: 'E',
        controller: UsersFormController,
        controllerAs: 'vm',
        bindToController: true,
        scope: 
        {
          users: '=',
        }
      };
    }

    UsersFormController.$inject = ['userService'];

    function UsersFormController(userService)
    {
      var vm = this;

      vm.newUser = new userService.User();
      vm.addUser = addUser;

      function addUser()
      {
        vm.users.$add(vm.newUser);
        vm.newUser = new userService.User();
      }

    }
  }
)();