var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var campeonesSchema = Schema({
  id: Number,
  nombre_campeon: String,
  campeon_desc: String,
  imagen: String,
  rol: String,
  pasiva: String,
  pasiva_desc: String,
  habilidad_q: String,
  q_desc: String,
  habilidad_w: String,
  w_desc: String,
  habilidad_e: String,
  e_desc: String,
  habilidad_r: String,
  r_desc: String
});

module.exports = mongoose.model('Campeones', campeonesSchema);