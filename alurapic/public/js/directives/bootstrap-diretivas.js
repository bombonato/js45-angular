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
})
.directive('meuBotaoPerigo', function(){
  var ddo = {};
  //DDO - Directive Definition Object
  ddo.restrict = "E"; //é o padrão

  ddo.transclude = true;

  ddo.scope = {
    nome: '@', // @ - cópia por valor, escopo isolado, executado no contexto da diretiva
    acao: '&' // & - passagem por referência, é uma função, será executada no controller
  };

  ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao()">{{nome}}</button>';

  return ddo;
})
.directive('trf1Foco', function(){ //CamelCase, no html é "trf1-foco"
  var ddo = {};
  //DDO - Directive Definition Object
  ddo.restrict = "A"; // Atributo

  ddo.scope = {
    focado : '='
  };

  ddo.link = function (scope, element) {
    scope.$watch('focado', function() {
      console.log("camou a func do watch")
      if(scope.focado) {
        console.log("disparando alteracao")
        var elementDOM = element[0];
        elementDOM.focus();
        scope.focado = false;
      }
    });
  };

  return ddo;
});
