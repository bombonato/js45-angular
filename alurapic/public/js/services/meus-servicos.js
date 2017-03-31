angular.module('meusServicos', ['ngResource'])
        .factory('recursoFoto', function($resource) {
          return $resource('/v1/fotos/:fotoId', null, {
            'update' : {
              method: 'PUT'
            }
          });
        })
        .service('cadastroDeFotos', function (recursoFoto, $q) {
          this.listar = function() {
            return $q(function (resolve, reject) {
                recursoFoto.query(function(fotos){
                    resolve(fotos);
                }, function(erro) {
                    console.log(erro);
                    reject({
                      mensagem: "Não foi possivel listar"
                    });
                });
            });
          }

          this.cadastrar = function(foto) {
            return $q(function(resolve, reject){

                // Codigo foi transportado de foto-controller
                if(foto._id) {

                  recursoFoto.update( {fotoId: foto._id}, foto, function() {
                      console.log("Foto alterada");
                      resolve({
                        mensagem : 'Foto ' + foto.titulo + ' alterada com sucesso',
                        inclusao: false
                      });
                  }, function(erro) {
                    console.log("Foto NÃO alterada: " + erro);
                    reject({
                      mensagem : 'Erro: foto ' + foto.titulo + ' NÃO cadastrada'
                    });
                  });

                } else {

                    recursoFoto.save(foto, function() {
                      console.log("Foto adicionada");
                      resolve({
                        mensagem : 'Foto ' + foto.titulo + ' cadastrada com sucesso',
                        inclusao: true
                        // foto : {};
                        // formulario.$setUntouched();
                        // formulario.$setPristine();
                      });
                    }, function(erro) {
                      console.log(erro);
                      reject({
                        mensagem : 'Erro: foto ' + foto.titulo + ' NÃO cadastrada'
                      });
                    })
                  }
            })
          }
        });
