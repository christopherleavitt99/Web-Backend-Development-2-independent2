const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/listItem', require('./listItem'));

module.exports = router;