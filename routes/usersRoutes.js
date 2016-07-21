var userRouter = require('express').Router();
var User = require('../controllers/users');

userRouter.route('/usuario')
  .post(User.create);

userRouter.route('/usuario/:id')
  .get(User.get)
  .put(User.update)
  .delete(User.delete);

user.route('/usuario/auth')
  .post(User.auth);


module.exports = userRouter;