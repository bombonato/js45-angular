angular
.module('alurapic')
.controller('FotosController', function($scope, $http) {

  $scope.fotos = [];
  $scope.filtro = '';

    $http.get('v1/fotos')
    .success(function(retorno) {
        $scope.fotos = retorno;
    })
    .error(function(erro) {
        console.error('As fotos nao foram carregadas');
    });
    // $scope.foto = {
    //     titulo: 'Leão',
    //     url: 'http://www.fundosanimais.com/Minis/leoes.jpg'
    // };
});
