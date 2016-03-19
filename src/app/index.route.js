export function routerConfig($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('new-page', {
      url: '/page',
      templateUrl: 'app/components/page/page.html',
      controller: 'PageController',
      controllerAs: 'page'
    });

  $urlRouterProvider.otherwise('/');
}
