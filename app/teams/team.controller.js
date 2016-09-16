(function()
  {
    'use strict';

    angular
      .module('app.teams')
      .controller('TeamsListController', TeamsListController);

    TeamsListController.$inject = ['teamService'];

     function TeamsListController(teamService)
    {
      var vm = this;

      vm.teams  = teamService.getTeamsByUser();
      vm.teamUsers = teamService.getTeamsByUser();
    }
  }
)();