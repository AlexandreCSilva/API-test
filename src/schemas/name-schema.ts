import Joi from 'joi';

export const nameValidateSchema = Joi.object({
    name: Joi.string().required()
});