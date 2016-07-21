var userRouter = require('express').Router();
var User = require('../controllers/users');
var auth = require('../middleware/authorization');

userRouter.route('/usuario')
  .post(User.create);

userRouter.route('/usuario/:id')
  .get(auth, User.get)
  .put(auth, User.update)
  .delete(auth, User.delete);

userRouter.route('/usuario/auth')
  .post(User.auth);


module.exports = userRouter;