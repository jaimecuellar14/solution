const express = require('express');
const router = express.Router();
const controllers = require('./controllers/controllers')

router.get('/', controllers.test);
router.get('/all', controllers.getAll);
router.get('/deposits', controllers.getDeposits);
router.get('/withdrawals', controllers.getWithdrawals);

module.exports = router;