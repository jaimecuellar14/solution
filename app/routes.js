const express = require('express');
const router = express.Router();


router.use('/movements', require('./movements/routes'));
router.use('/actions', require('./actions/routes'));
router.use('/wire-transfer', require('./wire-transfer/routes'));
router.use('/pin', require('./pin/routes'));

module.exports = router;