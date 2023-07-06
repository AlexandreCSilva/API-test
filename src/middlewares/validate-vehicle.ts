import { NextFunction, Request, Response } from "express";
import { vehicleValidateSchema } from "../schemas/vehicles-schema.ts";
import { CNPJValidateSchema } from "../schemas/cnpj-schema.ts";
import { operationIdValidateSchema } from "../schemas/operation-schema.ts";

export function validateVehicle(req: Request, res: Response, next: NextFunction) {
    const { vehicle, operationId, CNPJ } = req.query;

    if (vehicle) {
        const { error } = vehicleValidateSchema.validate({ placa: parseInt(vehicle.toString()) });
        
        if (!error) {
            next()
        } else {
            res.status(404).send(error.details.map((d) => d.message));
        }
    } else {
        if (!operationId) {
            if (!CNPJ) {
                next();
            } else {
                const { error } = CNPJValidateSchema.validate({ CNPJ: CNPJ.toString() });

                if (!error) {
                    next();
                } else {
                    res.status(404).send(error.details.map((d) => d.message));
                }
            }
        } else {
            const { error } = operationIdValidateSchema.validate({ id: parseInt(operationId.toString()) });

            if (!error) {
                next();
            } else {
                res.status(404).send(error.details.map((d) => d.message));
            }
        }
    }
}