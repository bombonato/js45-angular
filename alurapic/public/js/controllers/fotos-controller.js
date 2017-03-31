angular
.module('alurapic')
.controller('FotosController', function($scope, recursoFoto, cadastroDeFotos) {

  $scope.fotos = [];
  $scope.filtro = '';
  $scope.mensagem = '';


    // recursoFoto.query(function(fotos){
    //   $scope.fotos = fotos;
    // }, function(erro) {
    //   console.log(erro);
    // });
    cadastroDeFotos.listar()
      .then(function(fotos) {
        $scope.fotos = fotos;
      })
      .catch(function(erro) {
        console.log(erro);
        $scope.mensagem = "Nao foi possivel listar as fotos";
      });

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
