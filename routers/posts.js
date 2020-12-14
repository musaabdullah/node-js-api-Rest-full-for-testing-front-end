/* eslint-disable linebreak-style */
const { Router } = require('express');
const postController = require('../controllers/posts');

const router = Router();

router.route('/')
  .get(postController.getPosts)
  .post(postController.insertPost);

router.route('/:id')
  .get(postController.getPost)
  .put(postController.putPost)
  .delete(postController.deletePost);

module.exports = router;
