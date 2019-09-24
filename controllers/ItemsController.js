const Item = require('../models/ItemsModel');

exports.getItems = (req, res, next) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
};

exports.addItem = (req, res, next) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save().then(item => res.json(item));
};

exports.deleteItem = (req, res, next) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
};
