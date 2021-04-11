let Joi = require('joi');

module.exports = Joi.object().keys({
    
    firstName: Joi.string().required().error(() => 'must be a string'),
    lastName: Joi.string().required().error(() => 'must be a string'),
    email: Joi.string().required().error(() => 'must be a string'),
    phoneNumber: Joi.string().required().error(() => 'must be a string'),
    potentialCity: Joi.string().required().error(() => 'must be a string'),
    priceRange: Joi.string().required().error(() => 'must be a string'),
    squareFootage: Joi.string().required().error(() => 'must be a string'),
    appointmentTime: Joi.string().required().error(() => 'must be a date')
})