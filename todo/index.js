const express = require('express');

const controller = require('./todo.controller');

const router = express.Router();

router.get('/', controller.getAction);
router.post('/', controller.createAction);
router.get('/:id', controller.getOneAction);

module.exports = router;
