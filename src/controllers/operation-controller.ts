import { Request, Response } from "express";
import operationService from "../services/operation-service.ts";
import clientService from "../services/client-service.ts";

export async function operationPost(req: Request, res: Response) {
    const { name, CNPJ } = req.body;
  
    try {
        const client = await clientService.readCNPJ(CNPJ);

        if (!client) {
            return res.status(404).send('Client not found!');
        } else if (client.situacao == false) {
            return res.status(404).send('Client is not active!');
        }

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

export async function operationRead(req: Request, res: Response) {
    const { operation, CNPJ } = req.query;
  
    try {
        if (operation) {
            const result = await operationService.readOperation(operation.toString());

            if (!result) {
                return res.status(404).send('Operation not found!');
            }

            return res.status(200).send(result);
        } else if (CNPJ) {
            const client = await clientService.readCNPJ(CNPJ.toString());

            if (!client) {
                return res.status(404).send('Client not found!');
            }

            const result = await operationService.readCNPJ(CNPJ.toString());
            
            return res.status(200).send(result);
        } else {
            const result = await operationService.readAll();
            
            return res.status(200).send(result);
        }
    } catch (error) {
        return res.status(400).send(error.message);
    }
}

export async function operationUpdate(req: Request, res: Response) {
    const { id, nome, clienteId, situacao } = req.body;
    
    try {
      const operacao = await operationService.update({ id, nome, clienteId, situacao });
      return res.status(200).send(operacao);
    } catch (error) {
      return res.status(400).send(error.message);
    }
}