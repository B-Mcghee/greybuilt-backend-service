let Joi = require('joi');

module.exports = Joi.object().keys({
    title: Joi.string().required().error(() => 'must be a string'),
    description: Joi.string().required().error(() => 'must be a string'),
    coverImage: Joi.string().required().min(10).max(10).error(() => 'no other characters but digits'),
    images: Joi.array().required().error(() => 'no images'),
    squareFeet: Joi.string().required().error(() => 'must be a footage'),
    beds: Joi.string().required().error(() => 'must be a beds'),
    baths: Joi.string().required().error(() => 'must be a baths'),
})