(function()
  {
    'use strict';

    angular
      .module('app.core')
      .factory('teamService', teamService);

    teamService.$inject = [
                            '$firebaseArray',
                            '$firebaseObject',
                            'firebaseDataService'
                          ];

    function teamService($firebaseArray, $firebaseObject, firebaseDataService)
    {
      var teams = null;
      
      var service = {
        root: Team.teamName,
        Team: Team,
        getTeamsByUser: getTeamsByUser,
        reset: reset
      };

      return service;

      function Team(){
        this.name = '';
        this.users = '';
      }

      function getTeamsByUser(uid)
      {
        if (!teams)
        {
          teams = $firebaseArray(firebaseDataService.teams);
        }
        return teams;

        if(!teamUsers)
        {
          teamUsers = $firebaseArray(firebaseDataService.teams.users);
        }
        return teamUsers;
      }

      function reset()
      {
        if (teams)
        {
          teams.$destroy();
          teams = null;
        }
      }
    }
  }
)();



