const Joi = require('joi')

function exercisesValidation(data){
    //Validation
    const schema={
        username:Joi.string()
            .required(),
        description:Joi.string()
            .required()
            .min(3)
            .max(20),
        duration:Joi.number()
            .required()
            .max(1000000),
        date:Joi.required()
    }
    return Joi.validate(data, schema)
}

function userValidation(data){
    //Validation
    const schema={
        username:Joi.string()
            .min(3)
            .max(10)
            .required()
    }
    return Joi.validate(data, schema)
}

module.exports.userValidation=userValidation;
module.exports.exercisesValidation=exercisesValidation