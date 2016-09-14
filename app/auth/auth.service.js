(function()
  {
    'use strict';

    angular
      .module('app.auth')
      .factory('authService', authService);

    authService.$inject = ['$firebaseAuth', 'firebaseDataService', 'userService'];

    function authService($firebaseAuth, firebaseDataService, userService)
    {
      var firebaseAuthObject = $firebaseAuth();

      var service = {
        firebaseAuthObject: firebaseAuthObject,
        register: register,
        login: login,
        logout: logout,
        isLoggedIn: isLoggedIn,
        sendWelcomeEmail: sendWelcomeEmail
      };

      return service;

      function register(user) 
      {
        // TODO: add validation service before executing the createUser function, currently using the existing Angular validation
        return firebaseAuthObject.$createUserWithEmailAndPassword(user.email, user.password);
      }

      function login(user)
      {
        return firebaseAuthObject.$signInWithEmailAndPassword(user.email, user.password);
      }

      function logout()
      {
        userService.reset();
        firebaseAuthObject.$signOut();
      }

      function isLoggedIn()
      {
        return firebaseAuthObject.$getAuth();
      }

      function sendWelcomeEmail(emailAddress)
      {
        firebaseDataService.emails.push(
          {
            emailAddress: emailAddress
          }
        );
      }
    }
  }
)();