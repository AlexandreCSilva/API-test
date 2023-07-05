import Joi from 'joi';
import { Cliente } from '@prisma/client';

export type clientSchema = Pick<Cliente, "CNPJ" | "razaoSocial" | "fantasia" | "situacao">

export const clientValidateSchema = Joi.object<clientSchema>({
    CNPJ: Joi.number().required(),
    razaoSocial: Joi.string().required(),
    fantasia: Joi.string().required(),
    situacao: Joi.boolean()
});