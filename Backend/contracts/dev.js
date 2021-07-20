const Joi = require("joi");

const create = Joi.object({
    userId: Joi.string().required(),
    CV: Joi.string(),
    portfolio: Joi.string(),
    xp: Joi.string(),
}).required();

const update = Joi.object({
    CV: Joi.string(),
    portfolio: Joi.string(),
    xp: Joi.string(),
    userId: Joi.string().required()
}).required();
module.exports = { create, update };