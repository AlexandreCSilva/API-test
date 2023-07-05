import { Cliente } from "@prisma/client";
import { clientSchema } from "../schemas/client-schema.ts";
import clientRepository from "../repositories/client-repository.ts";

async function create({ CNPJ, razaoSocial, fantasia, situacao }: clientSchema): Promise<Cliente> {
    return clientRepository.create({ CNPJ, razaoSocial, fantasia, situacao });
}

async function readAll(): Promise<Cliente[]> {
    const clients = await clientRepository.readAll();

    return clients;
}

async function readCNPJ(CNPJ : string): Promise<Cliente> {
    const client = await clientRepository.readCNPJ(CNPJ);

    return client;
}

async function update({ CNPJ, razaoSocial, fantasia, situacao }: clientSchema): Promise<Cliente> {
    return clientRepository.update({ CNPJ, razaoSocial, fantasia, situacao });
}

async function remove(CNPJ : string): Promise<Cliente> {
    return await clientRepository.remove(CNPJ);
}

const clientService = {
    create,
    readAll,
    readCNPJ,
    update,
    remove,
};

export default clientService;