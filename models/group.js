var mongoose = require('mongoose');

var groupSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  users: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
});

groupSchema.methods.addUser = function (userId ,cb) {
  this.users.addToSet(userId);
  this.save((err)=>{
    if(err) throw err;
    cb();
  });
}

groupSchema.plugin(require('mongoose-unique-validator'));

module.exports = mongoose.model('Group', groupSchema);