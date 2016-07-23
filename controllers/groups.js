var Group = require('../models/group');
var User = require('../models/user');

exports.create = (req, res) => {
  var group = new Group({
    name: req.body.groupName
  });

  var user = new User(req.body);
  user.rol = 'Admin';

  user.save((err) => {
    if (err) {
      res.status(400);
      res.json({ success: false, err: err });
    } else {
      group.users.push(user._id);
      group.save((err) => {
        if (err) {
          //HACER QUE BORRE EL USUARIO ANTERIOR SI NO SE GUARDA EL GRUPO
          User.remove({_id: user._id}, (err)=>{});
          res.status(400);
          res.json({ success: false, err: err });
        } else {
          group.populate('users', (err, group) => {
            if (err) {
              res.status(400);
              res.json({ success: false, err: err });
            } else {
              res.json({ success: true, group: group });
            }
          });
        }
      });
    }
  });

};