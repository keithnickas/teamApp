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
          users: '=',
        }
      };
    }

    UsersTableController.$inject = ['userService', '$scope'];

    function UsersTableController(userService)
    {
      var vm = this;
      vm.removeUser = removeUser;
      vm.removeTeam = removeTeam;
      vm.addTeamToUser = addTeamToUser;

      function removeTeam(user)
      {
        // this sets the value for teamName to null before being saved back to the firebase REST api
        vm.users.$save(user.teamName = null);
        // this saves the changes to firebase REST api
        vm.users.$save(user);

      }

      function addTeamToUser(user, teamName) 
      {
        var addTeam = vm.users.$save(user.teamName = teamName);
        // this saves the changes to firebaseData.service REST api
        vm.users.$save(user);
      }

      // removes the selected user
      function removeUser(user)
      {
        vm.users.$remove(user);
      }
    }
  }
)();