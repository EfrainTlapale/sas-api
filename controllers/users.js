var User = require('../models/user');
var Group = require('../models/group');
var config = require('../config');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

exports.create = (req, res) => {
  //Hacer que primero compruebe el grupo y despues cree el usuario
  var user = new User(req.body);
  user.save((err) => {
    if (err) {
      res.status(400);
      res.json({ success: false, err: err });
    } else {
      Group.findOne({name: req.body.groupName},(err, group)=>{
        if(err || !group){
          res.status(400);
          res.json({ success: false, err: err });  
        }else{
          group.addUser(user._id, (err) => {
            if(err){
              res.status(400);
              res.json({ success: false, err: err }); 
            }else{
              res.json({success: true, user: user, group: group});
            }
          });
        }
      });
    }
  });
};

exports.get = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) {
      res.status(400);
      res.json({ success: false, err: err });
    } else {
      res.json({ success: true, user: user });
    }
  });
};

exports.update = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) {
      res.status(400);
      res.json({ success: false, err: err });
    } else {
      Object.assign(user, req.body);
      user.save((err) => {
        if (err) {
          res.status(400);
          res.json({ success: false, err: err });
        } else {
          res.json({ success: true, user: user });
        }
      });
    }
  });
};

exports.delete = (req, res) => {
  User.remove({ _id: req.params.id }, (err) => {
    if (err) {
      res.status(400);
      res.json({ success: false, err: err });
    } else {
      res.json({ success: true, message: 'Usuario eliminado' });
    }
  });
};

exports.auth = (req, res) => {
  User.findOne({ username: req.body.username }, (err, user) => {
    if (err) {
      res.status(400);
      res.json({ success: false, err: err });
    } else if (!user) {
      res.status(400);
      res.json({ success: false, err: err });
    } else if (user) {
      bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
        if (isMatch) {
          console.log(isMatch);
          var token = jwt.sign(user, config.st);
          res.json({ success: true, token: token });
        } else {
          res.status(400);
          res.json({ success: false, err: err });
        }
      });
    }
  });
};  