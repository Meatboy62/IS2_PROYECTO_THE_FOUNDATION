var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Campeon = require('../modelos/campeones');


/*get all campeones*/
router.get('/', function (req, res, next) {
  Campeon.find({}, (err, datos) => {
    if (err) {
      res.json({ 'error': 'error al hacer la consulta' });
    } else {
      res.status(200).json(datos);
    }
  });
});

/*get 1 campeon*/
router.get('/:idCampeon', function (req, res, next) {
  Campeon.findOne({ 'id': req.params.idCampeon }, (err, datos) => {
    if (err) {
      res.json({ 'error': 'error al hacer la consulta' });
    } else {
      res.status(200).json(datos);
    }
  });
});

/*delete 1 campeon*/
router.delete('/:idCampeon', (req, res, next) => {
  Campeon.deleteOne({ 'id': req.params.idCampeon }, (err) => {
    if (err) {
      res.json({ 'error': 'error al hacer la consulta' });
    } else {
      res.json({ 'mensaje': 'OK' });
    }
  });
});

/*post 1 campeon*/
router.post('/', (req, res, next) => {
  var champ = Campeon({
    id: req.body.id,
    nombre_campeon: req.body.nombre_campeon,
    campeon_desc: req.body.campeon_desc,
    imagen: req.body.imagen,
    rol: req.body.rol,
    pasiva: req.body.pasiva,
    pasiva_desc: req.body.pasiva_desc,
    habilidad_q: req.body.habilidad_q,
    q_desc: req.body.q_desc,
    habilidad_w: req.body.habilidad_w,
    w_desc: req.body.w_desc,
    habilidad_e: req.body.habilidad_e,
    e_desc: req.body.e_desc,
    habilidad_r: req.body.habilidad_r,
    r_desc: req.body.r_desc
  });
  champ.save((err, data) => {
    if (err) {
      res.json({ 'error': "Error al insertar" });
    } else {
      res.status(200).json(data);
    }
  });
});

/*update 1 or all atributes of campeon*/
router.patch('/:idCampeon', (req, res, next) => {
  Campeon.updateOne({ 'id': req.params.idCampeon }, { $set: req.body }, (err, data) => {
    if (err) {
      res.json({ 'error': "Error al insertar" });
    } else {
      res.status(200).json(data);
    }
  });
});

/*FALTA CORREGIR ESTE MÉTODO */
/*update all atributes of campeon*/
router.put('/:idCampeon', (req, res, next) => {
  Campeon.updateMany({ 'id': req.params.idCampeon,$set:req.body}, { $set:req.body}, (err, data) => {
    if (err) {
      res.json({ 'error': "Error al insertar" });
    } else {
      res.status(200).json(data);
    }
  });
});
module.exports = router;