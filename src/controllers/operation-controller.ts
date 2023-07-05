import { Request, Response } from "express";
import operationService from "../services/operation-service.ts";
import clientService from "../services/client-service.ts";

export async function operationPost(req: Request, res: Response) {
    const { name, CNPJ } = req.body;
  
    try {
        const client = await clientService.readCNPJ(CNPJ);
        const operation = await operationService.create({
            nome: name,
            situacao: true,
            cliente: {
                connect: {
                    id: client.id
                }
            }
        });
        return res.status(200).send(operation);
    } catch (error) {
        return res.status(400).send(error.message);
    }
}