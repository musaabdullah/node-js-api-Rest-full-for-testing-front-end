/* eslint-disable linebreak-style */
const { Router } = require('express');

const router = Router();

router.route('/')
  .get((req, res) => {
    res.json('Hello world');
  });

module.exports = router;
