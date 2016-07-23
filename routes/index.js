var mainRouter = require('express').Router();

// Add all routers here
// mainRouter.use('/',require('./name of router'));
mainRouter.use('/', require('./usersRoutes'));
mainRouter.use('/', require('./groupRoutes'));

module.exports = mainRouter;