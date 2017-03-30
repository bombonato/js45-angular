angular.module('alurapic', ['bootstrapDiretivas', 'ngAnimate', 'ngRoute', 'ngMessages', 'meusServicos'])
  .config(function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);

    $routeProvider.when('/fotos', {
      templateUrl: 'partials/principal.html',
      controller: 'FotosController'
    }).when('/fotos/new', {
      templateUrl: 'partials/foto.html',
      controller: 'FotoController'
    }).when('/fotos/edit/:fotoId', {
      templateUrl: 'partials/foto.html',
      controller: 'FotoController'
    // });
    // $routeProvider.otherwise({redirectTo: '/fotos'});
    }).otherwise({redirectTo: '/fotos'});
  });
