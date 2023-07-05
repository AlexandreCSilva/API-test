import { Request, Response } from "express";
import clientService from "../services/client-service.ts";

export async function clientPost(req: Request, res: Response) {
    const { CNPJ, razaoSocial, fantasia, situacao } = req.body;
  
    try {
      const client = await clientService.create({ CNPJ, razaoSocial, fantasia, situacao });
      return res.status(201).json({
        id: client.id,
      });
    } catch (error) {
      return res.status(400).send(error.message);
    }
}

export async function clientGet(req: Request, res: Response) {
  const { CNPJ } = req.query;

  if (!CNPJ) {
    try {
      const clients = await clientService.readAll();

      const result: any = clients.map(client => {
        return { ...client, ['CNPJ']: client.CNPJ.toString()}
      })

      return res.status(200).send(result);
    } catch (error) {
      return res.status(400).send(error.message);
    }
  } else {
    try {
      const client = await clientService.readCNPJ(CNPJ.toString());

      return res.status(200).send({ ...client, ['CNPJ']: client.CNPJ.toString()});
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }
}

export async function clientUpdate(req: Request, res: Response) {
  const { CNPJ, razaoSocial, fantasia, situacao } = req.body;
  
  try {
    const client = await clientService.update({ CNPJ, razaoSocial, fantasia, situacao });
    return res.status(200).send({ ...client, ['CNPJ']: client.CNPJ.toString()});
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

export async function clientDelete(req: Request, res: Response) {
  const { CNPJ } = req.query;

  if (!CNPJ) {
    res.status(404).send('It need to has a CNPJ on query!');
  }

  try {
    await clientService.remove(CNPJ.toString());

    return res.status(200).send('Sucess!');
  } catch (error) {
    return res.status(400).send(error.message);
  }
}