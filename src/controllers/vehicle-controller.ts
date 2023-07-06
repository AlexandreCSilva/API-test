import { Request, Response } from "express";
import vehicleService from "../services/vehicle-service.ts";
import operationService from "../services/operation-service.ts";
import clientService from "../services/client-service.ts";

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
    const { operationId, CNPJ, vehicle } = req.query;

    try {
        if (vehicle) {
            const result = await vehicleService.readPlate(parseInt(vehicle.toString()));

            if (!result) {
                return res.status(404).send('Vehicle not found!');
            }

            return res.status(200).send(result);
        } else if (operationId) {
            const operacao = await operationService.readId(parseInt(operationId.toString()));

            if (!operacao) {
                return res.status(404).send('Operation not found!');
            }

            const result = await vehicleService.readOperation(operacao.id);

            if (!result) {
                return res.status(404).send('Vehicles not found!');
            }

            return res.status(200).send(result);
        } else if (CNPJ) {
            const client = await clientService.readCNPJ(CNPJ.toString());

            if (!client) {
                return res.status(404).send('CLient not found!');
            }

            const result = await vehicleService.readClientId(client.id);

            if (!result) {
                return res.status(404).send('Vehicles not found!');
            }

            return res.status(200).send(result);
        } else {
            const result = await vehicleService.readAll();

            if (!result) {
                return res.status(404).send('Vehicles not found!');
            }

            return res.status(200).send(result);
        }
    } catch (error) {
        return res.status(400).send(error.message);
    }
}