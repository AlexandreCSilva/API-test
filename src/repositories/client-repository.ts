import { Prisma } from "@prisma/client";
import { prisma } from "../config/database.ts";

async function create(data: Prisma.ClienteCreateInput) {
    return prisma.cliente.create({
        data
    });
}

async function readAll() {
    return prisma.cliente.findMany();
}

async function readCNPJ(CNPJ: string) {
    return prisma.cliente.findFirst({
        where: {
            CNPJ: parseInt(CNPJ)
        }
    });
}

async function update(data: Prisma.ClienteCreateInput) {
    return prisma.cliente.update({
        where: {
            CNPJ: data.CNPJ
        },
        data: {
            ...data
        }
    });
}

async function remove(CNPJ: string) {
    return prisma.cliente.delete({
        where: {
            CNPJ: BigInt(CNPJ)
        }
    });
}

const clientRepository = {
    create,
    readAll,
    readCNPJ,
    update,
    remove,
};

export default clientRepository;