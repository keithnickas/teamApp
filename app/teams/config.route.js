(function()
  {
    'use strict';

    angular
      .module('app.teams')
      .config(configTeams);

    configTeams.$inject = ['$routeProvider'];

    function configTeams($routeProvider)
    {
      $routeProvider.when('/teams', 
        {
          templateUrl: 'views/teams/teams.html',
          controller: 'TeamsListController',
          controllerAs: 'vm',
          resolve: 
          {
            user: resolveUser
          }
        }
      );
    }
    // inject authServices 
    resolveUser.$inject = ['authService'];

    function resolveUser(authService)
    {
      return authService.firebaseAuthObject.$requireSignIn();
    }
  }
)();
