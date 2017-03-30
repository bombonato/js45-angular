angular
.module('alurapic')
.controller('FotoController', function($scope, recursoFoto, $routeParams) {
  $scope.foto = {};
  $scope.mensagem = '';

  if($routeParams.fotoId){
    // $http.get('/v1/fotos/' + $routeParams.fotoId)
    //       .success(function(foto) {
    //         $scope.foto = foto;
    //       })
    //       .error(function(erro) {
    //         console.log(erro);
    //         $scope.mensagem = "Nao foi possivel obter a foto";
    //       })
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

      if($routeParams.fotoId) {

        // $http.put('/v1/fotos/' + $scope.foto._id, $scope.foto )
        // .success(function() {
        //   console.log("Foto alterada");
        //   $scope.mensagem = 'Foto alterada com sucesso';
        // })
        // .error(function() {
        //   console.log("Foto NÃO alterada");
        //   $scope.mensagem = 'Erro: foto NÃO alterar';
        // });
        recursoFoto.update( {fotoId: $scope.foto._id},
          $scope.foto, function() {
          console.log("Foto alterada");
          $scope.mensagem = 'Foto alterada com sucesso';
        }, function(erro) {
          console.log("Foto NÃO alterada");
          $scope.mensagem = 'Erro: foto NÃO alterada';
        });

      } else {
          // $http.post('/v1/fotos', $scope.foto)
          // .success(function() {
          //   console.log("Foto adicionada");
          //   $scope.mensagem = 'Foto cadastrada com sucesso';
          //   $scope.foto = {};
          //   $scope.formulario.$setUntouched();
          //   $scope.formulario.$setPristine();
          // })
          // .error(function() {
          //   console.log("Foto NÃO cadastrada");
          //   $scope.mensagem = 'Erro: foto NÃO cadastrada';
          // })
          recursoFoto.save($scope.foto, function() {
            console.log("Foto adicionada");
            $scope.mensagem = 'Foto cadastrada com sucesso';
            $scope.foto = {};
            $scope.formulario.$setUntouched();
            $scope.formulario.$setPristine();
          }, function(erro) {
            console.log(erro);
            $scope.mensagem = 'Erro: foto NÃO cadastrada';
          })
        }
    }
  };
});
