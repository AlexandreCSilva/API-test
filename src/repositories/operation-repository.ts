import { Prisma } from "@prisma/client";
import { prisma } from "../config/database.ts";

async function create(data: Prisma.OperacaoCreateInput) {
    return prisma.operacao.create({
        data
    });
}

const operationRepository = {
    create,
};

export default operationRepository;