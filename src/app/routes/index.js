const appRouter = require("express").Router();
require('../modules/user/user.routes')(appRouter);
require('../modules/post/post.routes')(appRouter);
module.exports = appRouter;