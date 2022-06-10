var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('docker_index', { 'contenido': "nuevo" });
});

router.get('/apartado1-1', function (req, res, next) {
    res.render('apartado1-Punto1', { 'contenido': "nuevo" });
});

router.get('/apartado1-2', function (req, res, next) {
    res.render('apartado1-Punto2', { 'contenido': "nuevo" });
});

router.get('/apartado1-3', function (req, res, next) {
    res.render('apartado1-Punto3', { 'contenido': "nuevo" });
});

module.exports = router;