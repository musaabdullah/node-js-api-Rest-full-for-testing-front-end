/* eslint-disable linebreak-style */
// const Post = require('../models/posts');

const getPosts = (req, res) => {
  res.json('Hello world');
};

const getPost = (req, res) => {
  res.json({ message: 'get one post', id: req.params.id });
};

const insertPost = (req, res) => {
  res.json('post post');
};

const putPost = (req, res) => {
  res.json({ message: 'update one post', id: req.params.id });
};

const deletePost = (req, res) => {
  res.json({ message: 'delete one post', id: req.params.id });
};

module.exports = {
  getPosts,
  getPost,
  insertPost,
  putPost,
  deletePost,
};
