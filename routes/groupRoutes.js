var groupRouter = require('express').Router();
var Group = require('../controllers/groups');

groupRouter.route('/grupo')
  .post(Group.create);

module.exports = groupRouter;