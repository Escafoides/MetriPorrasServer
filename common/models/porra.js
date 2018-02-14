'use strict';
var app = require('../../server/server');
module.exports = function(Porra) {


      Porra.observe('before delete', (porra, next)=>{
            var Apuesta = app.models.Apuesta;
            var id = porra.where.id;
            Apuesta.find({where:{porraId:id}}, function(err,apuestas){
                  apuestas.forEach(function(apuesta){
                        Apuesta.destroyById(apuesta.id,function(err,cb){
                        });
                  });
            });
            next();
          });

};
