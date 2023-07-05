import Joi from 'joi';

export const operationValidateSchema = Joi.object({
    name: Joi.string().required(),
    CNPJ: Joi.string().max(14).required()
});