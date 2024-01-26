const express = require('express');

const contactRouter = require('./routes/contact-routes');

const mongoose = require('mongoose');

const app = express();


mongoose.connect("mongodb://localhost:27017/test")
    .then(()=> console.log("Mongo DB - Connection is successful"))
    .catch(()=> console.log("Mongo DB - Failed to connect"));


app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use((request, response, next)=>{
    response.setHeader("Access-Control-Allow-Origin","*");
    response.setHeader("Access-Control-Allow-Headers","Origin,X-Requested-With, Content-Type, Accept");
    response.setHeader("Access-Control-Allow-Methods","GET,POST,PATCH,PUT,DELETE,OPTIONS");
    next();
})

app.use("/contact", contactRouter);

app.listen(3030);