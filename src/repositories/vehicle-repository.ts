import { Veiculo, Prisma } from "@prisma/client";
import { prisma } from "../config/database.ts";

async function create(data: Prisma.VeiculoCreateInput) {
    return prisma.veiculo.create({
        data
    });
}

async function readPlate(placa: number) {
    return prisma.veiculo.findFirst({
        where: {
            placa
        }
    });
}

async function readOperation(operacaoId: number) {
    return prisma.veiculo.findMany({
        where: {
            operacaoId
        }
    });
}

async function readClientId(clienteId: number) {
    return prisma.veiculo.findMany({
        where: {
            operacao: {
                clienteId
            }
        }
    });
}

async function readAll() {
    return prisma.veiculo.findMany();
}

const vehicleRepository = {
    create,
    readPlate,
    readOperation,
    readClientId,
    readAll,
};

export default vehicleRepository;