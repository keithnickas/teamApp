(function()
  {
    'use strict';

    angular
      .module('app.core')
      .factory('teamService', teamService);

    teamService.$inject = ['$firebaseArray', 'firebaseDataService'];

    function teamService($firebaseArray, firebaseDataService)
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
      }

      function getTeamsByUser(uid)
      {
        if (!teams)
        {
          teams = $firebaseArray(firebaseDataService.teams);
        }
        console.log(teams);
        return teams;
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
