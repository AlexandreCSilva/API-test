import Joi from 'joi';

export const vehicleCreateValidateSchema = Joi.object({
    placa: Joi.number().required(),
    tipo: Joi.string().required(),
    operationId: Joi.number().required(),
});

export const vehicleValidateSchema = Joi.object({
    placa: Joi.number().required(),
});
