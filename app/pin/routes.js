const express = require('express');
const router = express.Router();
const controllers = require('./controllers/controllers')

router.post('/change-pin', controllers.changePin);

module.exports = router;