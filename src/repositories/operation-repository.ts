import { Operacao, Prisma } from "@prisma/client";
import { prisma } from "../config/database.ts";

async function create(data: Prisma.OperacaoCreateInput) {
    return prisma.operacao.create({
        data
    });
}

async function readOperation(operation: string) {
    return prisma.operacao.findMany({
        where: {
            nome: operation
        }
    });
}

async function readCNPJ(CNPJ: string) {
    return prisma.operacao.findMany({
        where: {
            cliente: {
                CNPJ: parseInt(CNPJ)
            }
        }
    });
}

async function update({ id, nome, situacao, clienteId }: Operacao) {
    console.log(id)
    return prisma.operacao.update({
        where: {
            id
        }
        , data: {
            nome,
            situacao,
            clienteId,
        }
    });
}

const operationRepository = {
    create,
    readCNPJ,
    readOperation,
    update,
};

export default operationRepository;