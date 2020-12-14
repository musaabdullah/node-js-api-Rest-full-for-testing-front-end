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
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const url = process.env.MONGODB_URL;
// My mistake was in spelling in the word engine i wrote enging.
app.use(morgan('dev'));
app.use(cors());
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/profile', express.static('upload/images'));

app.use(express.json());
app.use(express.urlencoded());

mongoose.connect(url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(res => { console.log(res); })
  .catch(err => { console.log(err); });

app.use('/posts', postRoute);

app.use((req, res, next) => {
  res.status(404).json({
    Erorr: 'Error not found',
  });
  next();
});
app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
