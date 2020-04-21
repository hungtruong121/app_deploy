const express = require('express');
const router = express.Router();

const controller = require('../controller/food');

router.route('/test').get(controller.test);
router.route('/').get(controller.getFoods);
router.route('/market').get(controller.getFoodsMarket);
router.route('/ingredient').get(controller.getHintMenu);
router.route('/update-daily').put(controller.updateDaily);

module.exports = router;