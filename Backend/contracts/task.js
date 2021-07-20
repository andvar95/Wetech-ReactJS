const Joi = require("joi");

const create = Joi.object({
  name: Joi.string().required(),
 // img: Joi.string().required(),
  description:Joi.string().required(),
  difficulty:Joi.string().required(),
  importance:Joi.string().required(),
  urgency:Joi.string().required(),
  team:Joi.string().required(),
  //historial:Joi.array().required(),
 // stats:Joi.array().required(),
 // status:Joi.string().required(),
  usersId:Jou.array().required(),
  tags:Joi.array().required(),
}).required();

const update = Joi.object({
  name: Joi.string().required(),
  img: Joi.string().required(),
  description:Joi.string().required(),
  difficulty:Joi.string().required(),
  importance:Joi.string().required(),
  urgency:Joi.string().required(),
  team:Joi.string().required(),
  historial:Joi.array().required(),
  stats:Joi.array().required(),
  status:Joi.string().required(),
  usersId:Jou.array().required(),
  tags:Joi.array().required(),
}).required();

module.exports = { create, update };