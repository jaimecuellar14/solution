const express = require('express');
const router = express.Router();
const controllers = require('./controllers/controllers')
const middlewares = require('../middlewares/middlewares');

router.get('/', controllers.test);
router.get('/all', middlewares.identifyUSer, middlewares.isCardActive, controllers.getAll);
router.get('/deposits', middlewares.identifyUSer, middlewares.isCardActive, controllers.getDeposits);
router.get('/withdrawals', middlewares.identifyUSer, middlewares.isCardActive, controllers.getWithdrawals);

module.exports = router;