const express = require('express');
const router = express.Router();
const controller = require('../controller/dish');

router.route('/').get(controller.getDishes);

module.exports = router;