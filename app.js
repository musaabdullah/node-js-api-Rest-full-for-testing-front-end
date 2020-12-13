const mongoose = require('mongoose');
const express = require('express');
const app = express();

const cors = require('cors')
const morgan = require('morgan');
const PORT = process.env.PORT || 3000;

// My mistake was in spelling in the word engine i wrote enging.
app.use(morgan('dev'))
app.use(cors());
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/profile',express.static('upload/images'));


app.use(express.json());
app.use(express.urlencoded());

mongoose.connect('mongodb://localhost:27017/newPost',{
    useCreateIndex:true,
    useNewUrlParser:true,
})
.then(res=>{console.log('connected successfuly')})
.catch(err=>{console.log('error has occard')});



app.listen(PORT,()=>{
console.log(`listening to port ${PORT}`)
})


