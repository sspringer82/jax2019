const jwt = require('jsonwebtoken');
const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
  if (req.body.username === 'admin' && req.body.password === 'test') {
    const payload = { user: 'admin' };
    const token = jwt.sign(payload, 'secret');
    res.json({ token });
  } else {
    res.status(401).json('unauthorized');
  }
});

module.exports = router;
