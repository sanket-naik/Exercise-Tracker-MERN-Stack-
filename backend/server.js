//IMPORTING EXPRESS FOR ROUTES
const express =require('express')
//CROSS ORIGIN RESOURCE SHARING
const cors=require('cors')
//MONGOOSE FOR DB
const mongoose=require('mongoose')

//ROUTES REQUIRE
const exercisesRouter=require('./routes/exercises')
const usersRouter=require('./routes/users')

//DOTENV FOR ENVIROMENTEL VARIABLE
require('dotenv').config();

const app=express();
const port=process.env.PORT || 5000;

//MIDDLEWARE
    //ALLOWS CROSS ORIGIN
    app.use(cors());
    //BODY PARSER ON POST
    app.use(express.json());
    //ADDING THE ROUTES
    app.use('/exercises', exercisesRouter)
    app.use('/users',usersRouter)

//DB CONNECT
const uri=process.env.MONGO_CONNECT_URL;
mongoose.connect(uri, {useNewUrlParser:true})

const connection = mongoose.connection
connection.once('open',()=>{
    console.log("MongoDB db connection established successfully")
})

//LISTENING SERVER
app.listen(port,()=>{
    console.log(`Server is running at ${port}`);
})
