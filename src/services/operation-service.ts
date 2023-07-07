import { Operacao, Prisma } from "@prisma/client";
import operationRepository from "../repositories/operation-repository.ts";

async function create(data: Prisma.OperacaoCreateInput): Promise<Operacao> {
    return operationRepository.create(data);
}

async function readOperation(Operation : string): Promise<Operacao[]> {
    const operation = await operationRepository.readOperation(Operation);

    return operation;
}

async function readCNPJ(CNPJ : string): Promise<Operacao[]> {
    const operation = await operationRepository.readCNPJ(CNPJ);

    return operation;
}

async function readId(id : number): Promise<Operacao> {
    const operation = await operationRepository.readId(id);

    return operation;
}

async function readAll(): Promise<Operacao[]> {
    const operation = await operationRepository.readAll();

    return operation;
}

async function update(data: Operacao): Promise<Operacao> {
    const operation = await operationRepository.update(data);

    return operation;
}

const operationService = {
    create,
    readCNPJ,
    readOperation,
    update,
    readId,
    readAll,
};

export default operationService;