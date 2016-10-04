(function()
  {
    'use strict';

    angular
      .module('app.core')
      .factory('userService', userService);

    userService.$inject = [
                            '$firebaseArray',
                            '$firebaseObject',
                            'firebaseDataService'
                          ];

    function userService($firebaseArray, $firebaseObject, firebaseDataService)
    {
      var users = null;
      var teams = null;
      
      var service = {
        User: User,
        Teams: Teams,
        getUsersByUid: getUsersByUid,
        reset: reset
      };

      return service;

      function User() {
        this.firstName = '';
        this.lastName = '';
        this.phone = '';
        this.email = '';
        this.teamName = '';
      }

      function Teams(){
        this.teamName = '';
        this.email = '';
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
