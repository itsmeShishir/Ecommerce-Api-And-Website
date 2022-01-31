const express = require('express');
const env = require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// routes
const authRoutes= require('./routes/auth');
const adminRoutes= require('./routes/admin/auth');
const sellerRoutes= require('./routes/seller/auth');
// Environment Cariable or you can constants
env.config();
// mongo db connection
//`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.gu8pf.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, 
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.gu8pf.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, 
    {
        useUnifiedTopology:true,
    }).then(()=>{
        console.log('database is connected');
    });
app.use(bodyParser());

// creating the middleware
app.use('/api',authRoutes);
app.use('/api',adminRoutes);
app.use('/api',sellerRoutes);

app.listen(process.env.PORT, ()=>{
    console.log(`server is running onn port ${process.env.PORT}`)
});