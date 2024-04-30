const express = require('express');
const router = express.Router();


router.use('/movements', require('./movements/routes'));
router.use('/actions', require('./actions/routes'));
// router.use('/wire-transfer');
// router.use('/pin');

module.exports = router;