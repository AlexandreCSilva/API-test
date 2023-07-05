import { NextFunction, Request, Response } from "express";
import { CNPJValidateSchema } from "../schemas/cnpj-schema.ts";

export function validateCNPJ(req: Request, res: Response, next: NextFunction) {
    const { CNPJ } = req.query;

    if (!CNPJ) {
        next()
    } else {
        const { error } = CNPJValidateSchema.validate({ CNPJ: CNPJ.toString() });

        if (!error) {
            next();
        } else {
            res.status(404).send(error.details.map((d) => d.message));
        }
    }
}