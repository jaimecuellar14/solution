const express = require('express');
const router = express.Router();
const controllers = require('./controllers/controllers')

router.post('/wire-transfer', controllers.wireTransfer);

module.exports = router;