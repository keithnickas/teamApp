(function()
  {
    'use strict';

    angular
      .module('app.teams')
      .directive('taglibTeamForm', taglibTeamForm);

    function taglibTeamForm() 
    {
      return {
        templateUrl: 'views/teams/directives/teamForm.html',
        restrict: 'E',
        controller: TeamsListController,
        controllerAs: 'vm',
        bindToController: true,
        scope: 
        {
          teams: '='
        }
      };
    }

    TeamsListController.$inject = ['teamService'];

    function TeamsListController(teamService)
    {
      var vm = this;

      vm.newTeam = new teamService.Team();
      vm.addTeam = addTeam;

      function addTeam() 
      {
        vm.teams.$add(vm.newTeam);
        vm.newTeam = new teamService.Team();
      }
    }
  }
)();