const express = require('express');
const router = express.Router();

const listItemController = require('../controllers/listItem');

router.get('/:listItemName', listItemController.getlistItem);

module.exports = router;