import * as Joi from 'joi';

export const JoiValidaitonSchema = Joi.object({
  PORT: Joi.number().default(3001),
  MONGODB: Joi.string().uri().required(),
  DEFAULT_LIMIT: Joi.number().default(6),
});
