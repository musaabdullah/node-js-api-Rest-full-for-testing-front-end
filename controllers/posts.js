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
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json(error);
  }
};

const getPost = async (req, res) => {
  try {
    const { id } = req.params.id;
    const post = await Post.findById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json(error);
  }
};

const insertPost = async (req, res) => {
  try {
    const post = {
      title: req.body.title,
      content: req.body.content,
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

const deletePost = async (req, res) => {
  try {
    const { id } = req.params.id;
    const deletePost = await Post.remove({ _id: id });
    res.status(200).json({ id });
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = {
  getPosts,
  getPost,
  insertPost,
  putPost,
  deletePost,
};
