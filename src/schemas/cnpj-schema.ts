import Joi from 'joi';

export const CNPJValidateSchema = Joi.object({
    CNPJ: Joi.string().required()
});