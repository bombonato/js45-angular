angular.module('alurapic', ['bootstrapDiretivas', 'ngAnimate', 'ngRoute'])
  .config(function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $routeProvider.when('/fotos', {
      templateUrl: 'partials/principal.html',
      controller: 'FotosController'
    }).when('/fotos/new', {
      templateUrl: 'partials/foto.html',
      controller: 'FotoController'
    // });
    // $routeProvider.otherwise({redirectTo: '/fotos'});
    }).otherwise({redirectTo: '/fotos'});
  });
