const mongoose = require('mongoose')

//CREATING A SCHEMA HOW OUR COLLECTION MUST BE
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        minlength:3
    },
},{
    //IT WILL ADD THE CREATED DATE, UPDATED DATE ETC
    timestamps:true,
});

module.exports = mongoose.model('User',userSchema)