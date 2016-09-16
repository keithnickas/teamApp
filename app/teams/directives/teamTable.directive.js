(function()
  {
    'use strict';

    angular
      .module('app.teams')
      .directive('taglibTeamTable', taglibTeamTable);

    function taglibTeamTable() 
    {
      return {
        templateUrl: 'views/teams/directives/teamTable.html',
        restrict: 'E',
        controller: TeamsListController,
        controllerAs: 'vm',
        bindToController: true,
        scope: {
          teams: '='
        }
      };
    }

    TeamsListController.$inject = ['teamService'];

    function TeamsListController(teamService)
    {
      var vm = this;

      vm.removeTeam = removeTeam;

      // removes the selected team
      function removeTeam(team)
      {
        vm.teams.$remove(team);
      }
    }
  }
)();