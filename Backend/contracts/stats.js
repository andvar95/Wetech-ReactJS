const Joi = require("joi");

const create = Joi.object({
  dateInit: Joi.date().required(),
  dateExpected: Joi.date().required(),
}).required();

const update = Joi.object({
  dateInit: Joi.date().required(),
  dateExpected: Joi.date().required(),
  active: Joi.boolean().required(),
}).required();

module.exports = { create, update };