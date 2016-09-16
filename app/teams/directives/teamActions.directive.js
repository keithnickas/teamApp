(function()
  {
    'use strict';

    angular
      .module('app.teams')
      .directive('taglibTeamActions', taglibTeamActions);

    function taglibTeamActions() 
    {
      return {
        templateUrl: 'views/teams/directives/teamActions.html',
        restrict: 'E',
        controller: TeamActionsController,
        controllerAs: 'vm',
        bindToController: true,
        scope: 
        {
          teams: '='
        }
      };
    }

    TeamActionsController.$inject = ['userService'];

    function TeamActionsController(userService)
    {
      var vm = this;
    }
  }
)();