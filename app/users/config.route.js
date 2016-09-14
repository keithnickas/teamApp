(function()
  {
    'use strict';

    angular
      .module('app.users')
      .config(configUsers);

    configUsers.$inject = ['$routeProvider'];

    function configUsers($routeProvider)
    {
      $routeProvider.when('/users', 
        {
          templateUrl: 'views/users/users.html',
          controller: 'UsersListController',
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
