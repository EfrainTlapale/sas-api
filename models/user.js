var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  nombre: {
    type: String,
    required: true
  },
  apellidos: {
    type: String,
    required: true
  },
  rol: {
    type: String,
    enum: ['Director', 'Gerente', 'Auxiliar']
  },
  email: {
    type: String,
    required: true
  },
  //Encriptar password
  password: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('User', userSchema);