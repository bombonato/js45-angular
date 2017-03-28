angular.module('bootstrapDiretivas', [])
.directive('meuPainel', function(){
  var ddo = {};
  //DDO - Directive Definition Object
  ddo.restrict = "AE"; //é o padrão

  ddo.transclude = true;

  ddo.scope = {
    titulo: '@titulo'
  };

  ddo.templateUrl = 'js/directives/meu-painel.html';

  return ddo;
})
.directive('minhaFoto', function(){
  var ddo = {};
  //DDO - Directive Definition Object
  ddo.restrict = "AE"; //é o padrão

  ddo.transclude = true;

  ddo.scope = {
    titulo: '@titulo',
    urlImagem: '@url'
  };

  ddo.templateUrl = 'js/directives/minha-foto.html';

  return ddo;
});
