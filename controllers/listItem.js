const db = require('../models');
const listItem = db.listItem;

exports.getlistItem = (req, res) => {
  const listItem = req.params.listItem;
  listItem.find({ listItem: listItem })
    .then((data) => {
      if (!data) res.status(404).send({ message: 'Not found listItem with name: ' + listItem });
      else res.send(data[0]);
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving listItem with listItem=' + listItem,
        error: err
      });
    });
};