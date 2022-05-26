var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Esta vivo, ESTA VIVO!!!!!');
});

module.exports = router;
