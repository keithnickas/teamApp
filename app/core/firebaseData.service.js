(function()
  {
    'use strict';

    angular
      .module('app.core')
      .factory('firebaseDataService', firebaseDataService);

    function firebaseDataService()
    {
      var rootRef = firebase.database().ref();

      var service = {
        root: rootRef,
        users: rootRef.child('users'),
        emails: rootRef.child('emails'),
        teams: rootRef.child('teams'),
        users: rootRef.child('users')
      };
      return service;
    }

  }
)();
