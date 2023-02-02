const db = require('../models');
const listItem = db.listItem;

exports.create = (req, res) => {
  // Validate request
 

  const listItem = new listItem(req.body);
  listItem
    .save()
    .then((data) => {
      console.log(data);
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the list.'
      });
    });
};

exports.getAll = (req, res) => {
  listItem.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving list.'
      });
    });
};

exports.getlistItem = (req, res) => {
  const listItem = req.params.listItem;
  listItem.find({ listItem: listItem })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving list.'
      });
    });
};