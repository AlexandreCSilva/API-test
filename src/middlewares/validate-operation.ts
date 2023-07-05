import { NextFunction, Request, Response } from "express";
import { CNPJValidateSchema } from "../schemas/cnpj-schema.ts";
import { nameValidateSchema } from "../schemas/name-schema.ts";

export function validateOperation(req: Request, res: Response, next: NextFunction) {
    const { operation, CNPJ } = req.query;

    if (!operation) {
        if (!CNPJ) {
            res.status(404).send('No operation or CNPJ on query!');
        } else {
            const { error } = CNPJValidateSchema.validate({ CNPJ: CNPJ.toString() });

            if (!error) {
                next();
            } else {
                res.status(404).send(error.details.map((d) => d.message));
            }
        }
    } else {
        const { error } = nameValidateSchema.validate({ name: operation.toString() });

        if (!error) {
            next();
        } else {
            res.status(404).send(error.details.map((d) => d.message));
        }
    }
}