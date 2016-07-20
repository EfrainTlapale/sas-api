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

userSchema.pre('save', (next) => {
  var user = this;
  if (!user.isModified('password')) {
    return next()
  }

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(user.password, salt, (err, hash)=>{
      user.password = hash;
      next();
    });
  });
});

userSchema.plugin(require('mongoose-unique-validator'));

module.exports = mongoose.model('User', userSchema);