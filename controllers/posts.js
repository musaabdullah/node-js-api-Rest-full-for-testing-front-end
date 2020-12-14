/* eslint-disable linebreak-style */
const Post = require('../models/posts');

// const handleError = (error) => {
//   const errors = {
//     title: '',
//     body: '',
//   };
//   if(error.message.includes('Post validetion failded'))
// };
const getPosts = async (req, res) => {
  res.json('Hello world');
};

const getPost = (req, res) => {
  res.json({ message: 'get one post', id: req.params.id });
};

const insertPost = async (req, res) => {
  try {
    const post = {
      title: req.body.title,
      body: req.body.body,
    };
    const postSaved = await Post.create(post);
    res.status(200).json(postSaved);
  } catch (error) {
    res.status(4040).json(error);
  }
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
