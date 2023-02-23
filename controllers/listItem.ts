const db = require('../models');
const listItem = db.listItem;

exports.getlistItem = (req, res) => {
  const listItemName = req.params.listItemName;
  listItem.find({ listItemName: listItemName })
    .then((data) => {
      if (!data) res.status(404).send({ message: 'Not found listItem: ' });
      else res.send(data[0]);
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving listItem =',
        error: err
      });
    });
};