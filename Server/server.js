const express = require('express');                         //import express
const mongoose = require('mongoose');                       //import mongoose
const cookieParser = require('cookie-parser');              //import cookie-parser
const cors = require('cors');                               //import cors

//create DB connection

mongoose.connect(                                           //connect to DB via mongoose, print to console on success/failure
    'mongodb+srv://n_irtisham:e-commerce123@cluster0.i2pgvhf.mongodb.net/'
).then(() => console.log('MongoDB connection successful')).catch(error => console.log(error));

//create apps
const app = express();                                      //create express app
const PORT = process.env.PORT || 5000;                      //run on port number of current environment variables object or 5000 if unavailable

app.use(
    //cors config
    cors({
        origin: 'http://localhost:5173/',                   //when app is being run, client is run on this port
        methods: ['GET', 'POST', 'DELETE', 'PUT'],          //standard HTTP CRUD operations
        allowedHeaders: [                                   //HTTP headers server allows client during CORS requests
            'Content-Type',
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma'
        ],
        credentials: true                                   //used in login and registration
    })
);

app.use(cookieParser());
app.use(express.json());

//start server
app.listen(PORT, ()=> console.log(`Server is now running on port ${PORT}`));