const itemsRouter = require('express').Router();
const {
  getItems,
  addItem,
  deleteItem
} = require('../controllers/ItemsController');

itemsRouter
  .route('/')
  .get(getItems)
  .post(addItem);

itemsRouter.route('/:id').delete(deleteItem);

module.exports = itemsRouter;
