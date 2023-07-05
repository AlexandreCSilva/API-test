import { User } from '@prisma/client';
import Joi from 'joi';

export type userSchema = Pick<User, "email" | "password">;

export const userValidateSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});