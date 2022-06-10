var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Campeon = require('../modelos/campeones');

/*METODO GET GENERAL*/
/*get all campeones*/
/*Este metodo permite mostrar todos los campeones almacenados*/
router.get('/', function (req, res, next) {
  Campeon.find({}, (err, datos) => {
    if (err) {
      res.json({ 'error': 'error al hacer la consulta' });
    } else {
      
      res.render('listaC', { 'contenido': datos });
      //res.status(200).json(datos);
    }
  });
});

/*METODO GET PARTICULAR*/
/*get 1 campeon*/
/*Este metodo permite mostrar un solo campeon*/
router.get('/:idCampeon', function (req, res, next) {
  Campeon.findOne({ 'id': req.params.idCampeon }, (err, datos) => {
    if (err) {
      res.json({ 'error': 'error al hacer la consulta' });
    } else {
      //res.status(200).json(datos);
      res.render('campeon', { 'contenido': datos });
    }
  });
});

/*METODO DELETE*/
/*delete 1 campeon*/
/*Este metodo permite eliminar un campeon */
router.delete('/:idCampeon', (req, res, next) => {
  Campeon.deleteOne({ 'id': req.params.idCampeon }, (err) => {
    if (err) {
      res.json({ 'error': 'error al hacer la consulta' });
    } else {
      //res.json({ 'mensaje': 'OK' });
      res.redirect("http://localhost:3000/campeones/");
    }
  });
});

router.get('/form/agregar', function (req, res, next) {
  res.render('agregarC', { 'contenido': "nuevo" });
});

/*METODO POST*/
/*post 1 campeon*/
/*Este metodo permite registrar un nuevo campeon */
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
  if (!isNaN(champ.id)) {
    champ.save((err, data) => {
      if (err) {
        res.json({ 'error': "Error al insertar" });
      } else {
        //res.status(200).json(data);
        res.redirect("http://localhost:3000/campeones/");
      }
    });
  } else {
    res.json({ 'error': "El id no es un numero" });
  }
});

/*METODO PATCH*/
/*update 1 or all atributes of campeon*/
/*Este metodo permite actualizar un campeon con ciertos parametros*/
router.patch('/:idCampeon', (req, res, next) => {
  Campeon.updateOne({ 'id': req.params.idCampeon }, { $set: req.body }, (err, data) => {
    if (err) {
      res.json({ 'error': "Error al insertar" });
    } else {
      res.status(200).json(data);
    }
  });
});


router.get('/modificar/:idCampeon', function (req, res, next) {
  Campeon.findOne({ 'id': req.params.idCampeon }, (err, datos) => {
    if (err) {
      res.json({ 'error': 'error al hacer la consulta' });
    } else {
      //res.status(200).json(datos);
      res.render('editarC', { 'contenido': datos });
    }
  });
});

/*METODO PUT*/
/*update all atributes of campeon*/
/*Este metodo permite actualizar todos los atributos de un campeon*/
router.put('/:idCampeon', function (req, res) {
  if (!req.body.id ||
    !req.body.nombre_campeon ||
    !req.body.campeon_desc ||
    !req.body.imagen ||
    !req.body.rol ||
    !req.body.pasiva ||
    !req.body.pasiva_desc ||
    !req.body.habilidad_q ||
    !req.body.q_desc ||
    !req.body.habilidad_w ||
    !req.body.w_desc ||
    !req.body.habilidad_e ||
    !req.body.e_desc ||
    !req.body.habilidad_r ||
    !req.body.r_desc) {
    res.json({ 'error': "Error al insertar" });
  } else {
    Campeon.updateOne({ 'id': req.params.idCampeon }, { $set: req.body }, (err, data) => {
      if (err) {
        res.json({ 'error': "Error al insertar" });
      } else {
        res.status(200).json(data);
        res.redirect("http://localhost:3000/campeones/");
      }
    });
  }
});


module.exports = router;