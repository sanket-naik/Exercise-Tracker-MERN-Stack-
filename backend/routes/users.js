const router =require('express').Router()
//IMPORTING THE SCHEMA
let User=require('../models/user.model')
//IMPORTING THEVALIDATION
const {userValidation} =require('../validation')

//GET REQUEST RETURNS ALL THE USER FROM DB
router.get('/',(req,res)=>{
    User.find()
        .then(users=>res.json(users))
        .catch(err=>res.status(400).json("Error: "+err));
}); 

//POST REQUEST WILL ADD THE NEW POST TO DB
router.post('/add',(req,res)=>{
    //VALIDATE
    const{error}=userValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message)
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