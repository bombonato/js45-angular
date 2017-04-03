angular
  .module('alurapic')
  .controller('FotosController', function($scope, recursoFoto, $mdMedia) {
    recursoFoto.query(function(fotos) {
        $scope.fotos = fotos;
      }, function(erro) {
        console.error('As fotos não foram carregadas')
      });
    $scope.remover = function(foto) {
      recursoFoto.delete({fotoId: foto._id}, function() {
          var indiceDaFoto = $scope.fotos.indexOf(foto);
          $scope.fotos.splice(indiceDaFoto, 1);
          $scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso';
        }, function(erro) {
          console.log(erro);
          $scope.mensagem = 'Não foi possível apagar a foto ' + foto.titulo;
        });
    }
    $scope.$watch(function() {
      return $mdMedia('gt-xs'); },
      function(fazWrap) {
        $scope.fazWrap = fazWrap;
      });
});
