const express = require('express');
const { default: mongoose } = require('mongoose');
const { post} = require('./models/Post');
const postRouter = require('./Router/postRouter')

const app = express();

app.use(express.json());
app.use(express.urlencoded())

mongoose.connect('mongodb+srv://ramzimammadli:<parolburdaydi>@cluster0.uzw0rni.mongodb.net/newdb') //password ozum yazmadim
    .then(res => {
        console.log('Connected!!');
    })
    .catch(err => {
        console.log('Error', err);
    })

let newPost = new post({
    id:1,
    name:'Ramzi',
    body:'React Native',
    likeCount:200
})

newPost.save()