const express = require('express');
const router = express.Router();

const listItemController = require('../controllers/listItem');

router.get('/:listItem', listItemController.getlistItem);

module.exports = router;