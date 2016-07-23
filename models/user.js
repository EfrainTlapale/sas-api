var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

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
    enum: ['Admin', 'Director', 'Gerente', 'Auxiliar']
  },
  email: {
    type: String,
    required: true
  },
  //Encriptar password
  password: {
    type: String,
    required: true
  }
});

userSchema.pre('save', function (next) {
  var user = this;
  if (!user.isModified('password')) {
    return next()
  }
  bcrypt.hash(user.password, 10, (err, hash) => {
    user.password = hash;
    next();
  });
});

userSchema.plugin(require('mongoose-unique-validator'));

module.exports = mongoose.model('User', userSchema);