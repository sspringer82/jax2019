const express = require('express');

const controller = require('./todo.controller');

const router = express.Router();

router.get('/', controller.getAction);
router.post('/', controller.createAction);
router.get('/:id', (req, res) => {
  console.log(req.params.id);
  res.send('yeah');
});

module.exports = router;
