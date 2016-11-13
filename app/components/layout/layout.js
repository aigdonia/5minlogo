(function(){
  'use strict';

  angular
  .module('5minlogo')
  .config(route);

  route.$inject = ['$stateProvider'];

  function route($stateProvider){
    $stateProvider
    .state('logoapp',{
      url: '/',
      abstract: true,
      templateUrl: 'components/layout/index.html'
    });
  }
})();
