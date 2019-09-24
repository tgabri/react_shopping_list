const apiRouter = require('express').Router();
const itemsRouter = require('./itemsRouter');

apiRouter.use('/items', itemsRouter);

module.exports = apiRouter;
