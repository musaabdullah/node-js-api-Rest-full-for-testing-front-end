/* eslint-disable linebreak-style */
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

  title: {
    type: String,
    required: [true, 'لا يمكن ترك هذا الحقل فارغا'],
  },
  content: {
    type: String,
    required: [true, 'لا يمكن ترك هذا الحقل فارغا'],
    minlength: [200, 'محتوى المقال لا بد من ان يكون اكثر من 200 حرف'],
  },
});

module.exports = mongoose.model('Post', postSchema);
