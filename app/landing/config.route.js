(function() {
  'use strict';

  angular
    .module('app.landing')
    .config(configApp);

  configApp.$inject = ['$routeProvider'];

  function configApp($routeProvider)
  {
    $routeProvider.when('/', 
      {
        templateUrl: 'views/layout/main.html'
      }
    );
  }

})();