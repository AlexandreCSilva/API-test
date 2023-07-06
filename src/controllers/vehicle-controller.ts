import { Request, Response } from "express";
import vehicleService from "../services/vehicle-service.ts";
import operationService from "../services/operation-service.ts";

export async function vehiclePost(req: Request, res: Response) {
    const { placa, tipo, operationId } = req.body;
  
    try {
        const operation = await operationService.readId(parseInt(operationId));

        if (!operation) {
            return res.status(404).send('Operation not found!');
        } else if (operation.situacao == false) {
            return res.status(404).send('Operation is not active!');
        }

        const vehicle = await vehicleService.create({ 
            placa, 
            tipo, 
            operacao: {
                connect: {
                    id: operation.id
                }
            }
        });

        return res.status(200).send(vehicle);
    } catch (error) {
        return res.status(400).send(error.message);
    }
}

export async function vehicleRead(req: Request, res: Response) {
    
}