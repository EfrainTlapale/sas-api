var User = require('../models/user');
var config = require('../config');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

exports.create = (req, res) => {
  var user = new User(req.body);
  user.save((err) => {
    if(err){
      res.status(400);
      res.json(err);
    }else{
      res.json({user: user});
    }
  });
};

exports.get = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if(err){
      res.status(400);
      res.json(err);
    }else{
      res.json({user: user});
    }
  });
};

exports.update = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if(err){
      res.status(400);
      res.json(err);
    }else{
      Object.assign(user, req.body);
      user.save((err) => {
        if(err){
          res.status(400);
          res.json(err);
        }else{
          res.json(user);
        }
      });
    }
  });
};