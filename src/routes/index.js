var express = require('express');
var router = express.Router();

/* GET home page. */
/* Este metodo permite mostrar todos los campeones*/
router.get('/', function (req, res, next) {
  res.render('index', { title: process.env.HOSTNAME });
});

module.exports = router;
