angular
.module('alurapic')
.controller('FotoController', function($scope, $http) {
  $scope.foto = {};
  $scope.mensagem = '';

  $scope.submeter = function() {
    console.log($scope.foto);

    // Somente se todos os campos do formulario forem validados
    if ($scope.formulario.$valid) {

      $http.post('/v1/fotos', $scope.foto)
      .success(function() {
        console.log("Foto adicionada");
        $scope.mensagem = 'Foto cadastrada com sucesso';
      })
      .error(function() {
        console.log("Foto NÃO cadastrada");
        $scope.mensagem = 'Erro: foto NÃO cadastrada';
      })
    }
  };
});
