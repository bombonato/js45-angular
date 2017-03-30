angular
.module('alurapic')
.controller('FotosController', function($scope, recursoFoto) {

  $scope.fotos = [];
  $scope.filtro = '';
  $scope.mensagem = '';

    // $http.get('/v1/fotos')
    // .success(function(retorno) {
    //     $scope.fotos = retorno;
    // })
    // .error(function(erro) {
    //     console.error('As fotos nao foram carregadas');
    // });

    recursoFoto.query(function(fotos){
      $scope.fotos = fotos;
    }, function(erro) {
      console.log(erro);
    });

    // $scope.remover = function(foto) {
    //     $http.delete('/v1/fotos/' + foto._id)
    //     .success(function() {
    //       var indiceFoto = $scope.fotos.indexOf(foto);
    //       $scope.fotos.splice(indiceFoto, 1);
    //       console.log("Foto " + foto.titulo + " removida");
    //       $scope.mensagem = "Foto " + foto.titulo + " removida";
    //     })
    //     .error(function() {
    //       console.log("Nao foi possivel remover foto " + foto.titulo);
    //       $scope.mensagem = "Nao foi possivel remover foto " + foto.titulo;
    //     });
    // };
    $scope.remover = function(foto) {
        recursoFoto.delete({ fotoId: foto._id}, function() {
          var indiceFoto = $scope.fotos.indexOf(foto);
          $scope.fotos.splice(indiceFoto, 1);
          console.log("Foto " + foto.titulo + " removida");
          $scope.mensagem = "Foto " + foto.titulo + " removida";
        }, function(erro) {
          console.log(erro);
          $scope.mensagem = "Nao foi possivel remover foto " + foto.titulo;
        });
    };
});
