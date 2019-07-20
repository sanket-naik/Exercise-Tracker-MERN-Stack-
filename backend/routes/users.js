const router =require('express').Router()
//IMPORTING THE SCHEMA
let User=require('../models/user.model')

//GET REQUEST RETURNS ALL THE USER FROM DB
router.get('/',(req,res)=>{
    User.find()
        .then(users=>res.json(users))
        .catch(err=>res.status(400).json("Error: "+err));
}); 

//POST REQUEST WILL ADD THE NEW POST TO DB
router.post('/add',(req,res)=>{
    //PARSING FROM BODY
    const username=req.body.username;
    //CREATING OBJECT
    const newUser=new User({username});
     //SAVING THE OBJECT TO DB
    newUser.save()
        .then(()=>res.json('User added!'))
        .catch(err=>res.status(400).json("Error: "+err))
})

module.exports=router;