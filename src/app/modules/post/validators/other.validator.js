const Joi = require('joi');

const studentCreateSchema = Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    class: Joi.number().required(),
    subjects: Joi.required(),
 
});


module.exports = {
    studentCreateSchema
}