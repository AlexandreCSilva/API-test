import Joi from 'joi';

export const operationCreateValidateSchema = Joi.object({
    name: Joi.string().required(),
    CNPJ: Joi.string().max(14).required()
});

export const operationUpdateValidateSchema = Joi.object({
    id: Joi.number().required(),   nome: Joi.string().required(),
    clienteId: Joi.number().required(),
    situacao: Joi.boolean().required(), 
});