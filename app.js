/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable arrow-parens */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const postRoute = require('./routers/posts');

const app = express();
const PORT = process.env.PORT || 3000;

// My mistake was in spelling in the word engine i wrote enging.
app.use(morgan('dev'));
app.use(cors());
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/profile', express.static('upload/images'));

app.use(express.json());
app.use(express.urlencoded());

mongoose.connect('mongodb://localhost:27017/newPost', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(res => { console.log(res); })
  .catch(err => { console.log(err); });

app.use('/posts', postRoute);

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
