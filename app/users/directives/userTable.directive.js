(function()
  {
    'use strict';

    angular
      .module('app.users')
      .directive('taglibUserTable', taglibUserTable);

    function taglibUserTable()
    {
      return {
        templateUrl: 'views/users/directives/userTable.html',
        restrict: 'E',
        controller: UsersTableController,
        controllerAs: 'vm',
        bindToController: true,
        scope: {
          users: '='
        }
      };
    }

    UsersTableController.$inject = ['userService'];

    function UsersTableController(userService)
    {
      var vm = this;

      vm.removeUser = removeUser;

      // removes the selecte user
      function removeUser(user)
      {
        vm.users.$remove(user);
      }
    }
  }
)();