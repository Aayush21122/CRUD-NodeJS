const express = require('express');
const mongoose = require('mongoose');

const router = require('./routes/products.routes')
const app = express()
require('dotenv').config();

app.use(express.json());
mongoose.connect("mongodb+srv://Aayush:"+ process.env.MONGO_PASS +"@nodejs.um8i3.mongodb.net/Nodejs?retryWrites=true&w=majority&appName=Nodejs").then(()=>{
    console.log("Connected to database");
    app.listen(8000,()=>{
        console.log("Server is running on port 8000")
    })
}).catch((error)=>{
    console.log("Connection failed!!",error)
});


app.use('/api/products',router);

