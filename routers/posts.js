/* eslint-disable linebreak-style */
const { Router } = require('express');

const router = Router();

router.route('/')
  .get((req, res) => {
    res.json('Hello world');
  })
  .post((req, res) => {
    res.json('post post');
  });

router.route('/:id')
  .get((req, res) => {
    res.json({ message: 'get one post', id: req.params.id });
  })
  .put((req, res) => {
    res.json({ message: 'update one post', id: req.params.id });
  })
  .delete((req, res) => {
    res.json({ message: 'delete one post', id: req.params.id });
  });

module.exports = router;
