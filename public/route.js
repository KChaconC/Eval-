(() => {
    'use strict';
    angular
      .module('appRoutes', ['ui.router', 'oc.lazyLoad', 'uiRouterTitle'])
      .config(routing);
    
    routing.$inject = ['$stateProvider', '$urlRouterProvider'];
    
    /* @ngInject */
    function routing($stateProvider, $urlRouterProvider, $oclazyLoad) {
  
      $stateProvider
        .state('landingPage', {
          url: '/',
          templateUrl: './components/landingPage/landing.view.html',
          data:{
            pageTitle: 'Evalu'
          }
        })

        .state('registroUsuarios', {
          url: '/registroUsuarios',
          templateUrl: './components/usuarios/registroUsuarios/registroUsuarios.view.html',
          data:{
            pageTitle: 'Registro de usuarios'
          },
          params: {
            objClienteTemp: ''
          },
          resolve: {
            load: ['$ocLazyLoad', ($ocLazyLoad) => {
              return $ocLazyLoad.load('./components/usuarios/registroUsuarios/registroUsuarios.controller.js')
            }]
          },
          controller: 'controladorRegistroUsuarios',
          controllerAs: 'vm'
        })
        

        $urlRouterProvider.otherwise('/');
    };
})();
