let Joi = require('joi');

module.exports = Joi.object().keys({
    name: Joi.string().required().error(() => 'must be a string'),
    email: Joi.string().required().error(() => 'must be a string'),
    phoneNumber: Joi.string().required().min(10).max(10).error(() => 'no other characters but digits'),
    role: Joi.string().required().error(() => 'must be a valid role'),
})