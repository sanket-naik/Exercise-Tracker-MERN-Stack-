const router =require('express').Router()
//IMPORTING THE SCHEMA
let Exercise=require('../models/exercise.model')

//GET REQUEST RETURNS ALL THE EXERCISE FROM DB
router.get('/',(req,res)=>{
    Exercise.find()
        .then(exercises=>res.json(exercises))
        .catch(err=>res.status(400).json("Error: "+err));
}); 

//POST REQUEST WILL ADD THE NEW POST TO DB
router.post('/add',(req,res)=>{
    //PARSING FROM BODY
    const username=req.body.username;
    const description=req.body.description;
    const duration=Number(req.body.duration);
    const date=Date.parse(req.body.date);
    //CREATING OBJECT
    const newExercise=new Exercise({
        username,
        description,
        duration,
        date,
    });
    //SAVING THE OBJECT
    newExercise.save()
        .then(()=>res.json('Exercise added!'))
        .catch(err=>res.status(400).json("Error: "+err))
})

//GETTING PERTICULAR ACTIVITY BY ID
router.get('/:id',(req,res)=>{
    Exercise.findById(req.params.id)
        .then(data=>res.json(data))
        .catch(err=>res.status(400).json("Error: "+err));
})

//DELETING BASED ON ID
router.delete('/:id',(req,res)=>{
    Exercise.findByIdAndDelete(req.params.id)
        .then(()=>res.json('Exercise deleted!!'))
        .catch(err=>res.status(400).json("Error: "+err));
})

//UPDATE THE DATA BASED ON ID
router.delete('/:id',(req,res)=>{
    Exercise.findByIdAndDelete(req.params.id)
        .then(()=>res.json('Exercise deleted!!'))
        .catch(err=>res.status(400).json("Error: "+err));
})

//UPDATE THE DATA BASED ON ID
router.patch('/update/:id',(req,res)=>{
    Exercise.findById(req.params.id)
        .then(exercise=>{ 
             exercise.username=req.body.username;
             exercise.description=req.body.description;
             exercise.duration=Number(req.body.duration);
             exercise.date=Date.parse(req.body.date);

             exercise.save()
                .then(()=>res.json("Exercise updated!"))
                .catch(err=>res.status(400).json("Error: "+err));
        })
        .catch(err=>res.status(400).json("Error: "+err));
})

module.exports=router;