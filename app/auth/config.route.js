(function()
  {
    'use strict';

    angular
      .module('app.auth')
      .config(configAuthApp)
      .run(runAuthApp);

    configAuthApp.$inject = ['$routeProvider'];

    function configAuthApp($routeProvider)
    {
      $routeProvider.when('/register',
        {
          templateUrl: 'views/auth/register.html',
          controller: 'AuthController',
          controllerAs: 'vm'
        }
      );
      $routeProvider.when('/login', 
        {
          templateUrl: 'views/auth/login.html',
          controller: 'AuthController',
          controllerAs: 'vm'
        }
      );
    }

    runAuthApp.$inject = ['$location', 'authService', 'PROTECTED_PATHS'];

    function runAuthApp($location, authService, PROTECTED_PATHS)
    {
      authService.firebaseAuthObject.$onAuthStateChanged(function(authData)
        {
          if (!authData && pathIsProtected($location.path())) {
            authService.logout();
            $location.path('/login');
          }
        }
      );

      function pathIsProtected(path)
      {
        return PROTECTED_PATHS.indexOf(path) !== -1;
      }
    }
  }
)();