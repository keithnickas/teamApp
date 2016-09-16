(function()
  {
    'use strict';

    angular
      .module('app', 
        [
          'ngRoute',
          'firebase',
          'app.auth',
          'app.core',
          'app.landing',
          'app.layout',
          'app.teams',
          'app.users'
        ]
      )
      .config(configApp)
      .run(runApp);

    configApp.$inject = ['$routeProvider'];

    function configApp($routeProvider)
    {
      $routeProvider.otherwise(
        {
          redirectTo: '/'
        }
      );
    }
    runApp.$inject = ['$rootScope', '$location'];

    function runApp($rootScope, $location)
    {
      $rootScope.$on('$routeChangeError', function(event, next, previous, error)
        {
          if (error === "AUTH_REQUIRED")
          {
            $location.path('/');
          }
        }
      );
    }
  }
)();
