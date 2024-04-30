const router = require('express').Router();
const controllers = require('./controllers/controllers');


router.get('/', controllers.test);
router.get('/deposit', controllers.deposit);
router.get('/withdraw', controllers.withdraw);

module.exports = router;