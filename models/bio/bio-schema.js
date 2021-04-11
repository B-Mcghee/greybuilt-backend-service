let Joi = require('joi');

module.exports = Joi.object().keys({
    position: Joi.string().required().error(() => 'must be a string'),
    user: Joi.object().required().error(() => 'must be a string'),
    avatar: Joi.string().required().error(() => 'no other characters but digits'),
})