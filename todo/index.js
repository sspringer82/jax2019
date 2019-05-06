const express = require('express');

const controller = require('./todo.controller');

const router = express.Router();

router.get('/', controller.getAction);
router.post('/', controller.createAction);

module.exports = router;
