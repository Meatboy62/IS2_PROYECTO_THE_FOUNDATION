var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
var Campeon=require('../modelos/campeones');


/* GEND POINT get all campeones*/
router.get('/', function(req, res, next) {
  Campeon.find({},(err,datos)=>{
    if(err){
      res.json({'error':'error al hacer la consulta'});
    }else{
      res.status(200).json(datos);
    }
  });
  });

  module.exports = router;