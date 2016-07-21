var jwt = require('jsonwebtoken');
var config = require('../config');

module.exports = (req, res, next) => {
  var token = req.headers['x-access-token'];
  if (token) {
    jwt.verify(token, (process.env.secret || config.st), (err, data) => {
      if (err) {
        res.status(400);
        res.json({ success: false, message: 'Error en token' })
      }else{
        req.data = data;
        next();
      }
    });
  } else {
    res.status(400);
    res.json({ success: false, message: 'token inexistente' });
  }
}