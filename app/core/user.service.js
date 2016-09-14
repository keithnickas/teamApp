(function()
  {
    'use strict';

    angular
      .module('app.core')
      .factory('userService', userService);

    userService.$inject = ['$firebaseArray', 'firebaseDataService'];

    function userService($firebaseArray, firebaseDataService)
    {

      var users = null;
      
      var service = {
        root: User.email,
        User: User,
        teamName: User.teamName,
        getUsersByUid: getUsersByUid,
        reset: reset
      };

      return service;

      function User() {
        this.name = '';
        this.phone = '';
        this.email = '';
        this.teamName = '';
      }

      function getUsersByUid(uid)
      {
        if (!users)
        {
          users = $firebaseArray(firebaseDataService.users);
        }
        return users;
      }

      function reset()
      {
        if (users)
        {
          users.$destroy();
          users = null;
        }
      }
    }
  }
)();
