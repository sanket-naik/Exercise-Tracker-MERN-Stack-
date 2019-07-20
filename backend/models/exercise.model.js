const mongoose = require('mongoose')

//CREATING A SCHEMA HOW OUR COLLECTION MUST BE
const exerciseSchema=new mongoose.Schema({
    username:{type:String, require:true},
    description:{type:String, require:true},
    duration:{type:Number, require:true},
    date:{type:Date, require:true},

},{
    //IT WILL ADD THE CREATED DATE, UPDATED DATE ETC
    timestamps:true,
});

module.exports = mongoose.model('Exercise',exerciseSchema)