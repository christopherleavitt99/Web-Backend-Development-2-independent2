const db = require('../models');
const listItem = db.listItem;

exports.getlistItem = (req, res) => {
  const themeName = req.params.themeName;
  listItem.find({ themeName: themeName })
    .then((data) => {
      if (!data) res.status(404).send({ message: 'Not found theme with name: ' + themeName });
      else res.send(data[0]);
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving theme with themeName=' + themeName,
        error: err
      });
    });
};