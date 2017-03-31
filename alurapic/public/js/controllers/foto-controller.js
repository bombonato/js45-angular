angular
.module('alurapic')
.controller('FotoController', function($scope, recursoFoto, $routeParams, cadastroDeFotos) {
  $scope.foto = {};
  $scope.mensagem = '';

  if($routeParams.fotoId){
    recursoFoto.get({ fotoId: $routeParams.fotoId}, function(foto) {
            $scope.foto = foto;
          }, function(erro) {
            console.log(erro);
            $scope.mensagem = "Nao foi possivel obter a foto";
          })
  }

  $scope.submeter = function() {
    console.log($scope.foto);

    // Somente se todos os campos do formulario forem validados
    if ($scope.formulario.$valid) {

      // if($routeParams.fotoId) {
      //
      //   recursoFoto.update( {fotoId: $scope.foto._id},
      //     $scope.foto, function() {
      //     console.log("Foto alterada");
      //     $scope.mensagem = 'Foto alterada com sucesso';
      //   }, function(erro) {
      //     console.log("Foto NÃO alterada");
      //     $scope.mensagem = 'Erro: foto NÃO alterada';
      //   });
      //
      // } else {
      //
      //     recursoFoto.save($scope.foto, function() {
      //       console.log("Foto adicionada");
      //       $scope.mensagem = 'Foto cadastrada com sucesso';
      //       $scope.foto = {};
      //       $scope.formulario.$setUntouched();
      //       $scope.formulario.$setPristine();
      //     }, function(erro) {
      //       console.log(erro);
      //       $scope.mensagem = 'Erro: foto NÃO cadastrada';
      //     })
      //   }
      cadastroDeFotos.cadastrar($scope.foto)
        .then( function(dados) {
          $scope.mensagem = dados.mensagem;
          // $scope.focado = true; //cap11
          
          if(dados.inclusao) {
            $scope.foto = {};
            $scope.formulario.$setUntouched();
            $scope.formulario.$setPristine();
          }
        })
        .catch( function(erro) {
          $scope.mensagem = erro.mensagem;
        })
    }
  };
});
