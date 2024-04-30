const router = require('express').Router();
const controllers = require('./controllers/controllers');


router.get('/', controllers.test);
router.get('/all', controllers.getAllMovements);
router.get('/deposits', controllers.getDeposits);
router.get('/withdrawals', controllers.getWithDrawals);

module.exports = router;