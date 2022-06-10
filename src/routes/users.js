var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/CarlosA/', function (req, res, next) {
  res.render('CarlosA', { 'contenido': "nuevo" });
});

router.get('/Isaac/', function (req, res, next) {
  res.render('Isaac', { 'contenido': "nuevo" });
});

router.get('/JorgeJ/', function (req, res, next) {
  res.render('JorgeJ', { 'contenido': "nuevo" });
});

router.get('/KarenA/', function (req, res, next) {
  res.render('KarenA', { 'contenido': "nuevo" });
});

router.get('/MarioA/', function (req, res, next) {
  res.render('MarioA', { 'contenido': "nuevo" });
});

router.get('/PabloE/', function (req, res, next) {
  res.render('PabloE', { 'contenido': "nuevo" });
});

router.get('/Paulo_Franco/', function (req, res, next) {
  res.render('Paulo_Franco', { 'contenido': "nuevo" });
});

router.get('/RubenS/', function (req, res, next) {
  res.render('RubenS', { 'contenido': "nuevo" });
});

module.exports = router;
