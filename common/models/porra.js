'use strict';

module.exports = function(Porra) {


    Porra.deletePorra = function(id, cb) {
      Porra.findOne({where:{id:id}},function(err,porra){
            console.log(porra.apuestas);
            cb(null, porra);
      });  
      }
  
      Porra.remoteMethod('deletePorra', {
            accepts: {arg: 'id', type: 'string', required: true},
            returns: {arg: 'response', type: 'Porra', "root": true},
            http: {path: '/deletePorra', verb: 'get'}
      });
};
