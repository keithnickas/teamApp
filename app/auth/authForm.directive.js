(function()
  {
    'use strict';

    angular
      .module('app.auth')
      .directive('taglibAuthForm', taglibAuthForm);

    function taglibAuthForm()
    {
      return {
        templateUrl: 'views/auth/authForm.html',
        restrict: 'E',
        controller: AuthFormController,
        controllerAs: 'vm',
        bindToController: true,
        scope:
        {
          error: '=',
          formTitle: '@',
          submitAction: '&',
        }
      };
    } // end taglibAuthForm

    function AuthFormController()
    {
      var vm = this;

      vm.user = {
        email: '',
        password: '',
        team: ''
      };
    } // end AuthFormController
  }
)();