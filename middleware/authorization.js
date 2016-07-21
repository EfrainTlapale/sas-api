var jwt = require('jsonwebtoken');
var config = require('../config');

module.exports = (req, res, next) => {
  var token = req.headers['x-acces-token'];
  if (token) {
    jwt.verify(token, (process.env.secret || config.st), (err, data) => {
      if (err) {
        res.status(400);
        res.json({ succes: false, message: 'Error en token' })
      }else{
        req.data = data;
        next();
      }
    });
  } else {
    res.status(400);
    res.json({ succes: false, message: 'token inexistente' });
  }
}