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

    UsersTableController.$inject = ['userService'];

    function UsersTableController(userService)
    {
      var vm = this;
      vm.removeUser = removeUser;
      vm.removeTeam = removeTeam;
      vm.addTeamToUser = addTeamToUser;

      function removeTeam(user)
      {
        // this will set the value for teamName to null before being saved back to the firebaseData.service REST api
        //vm.users.$save(user.teamName = "null");
        vm.users.$save(user.teamName = "null");
        // this saves the changes to firebaseData.service REST api
        vm.users.push(user);

      }
      /*
        TODO: this item is in progress; current bug is the "user" scope expression is undefined when init function from
        the form 
      */
      function addTeamToUser(user) 
      {

      }

      // removes the selected user
      function removeUser(user)
      {
        vm.users.$remove(user);
      }
    }
  }
)();