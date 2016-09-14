(function()
  {
    'use strict';

    angular
      .module('app.users')
      .controller('UsersListController', UsersListController);

    UsersListController.$inject = ['userService', 'user'];

    function UsersListController(userService, user)
    {
      var vm = this;
      vm.users = userService.getUsersByUid(user);
    }

  }
)();