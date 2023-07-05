import { Operacao, Prisma } from "@prisma/client";
import operationRepository from "../repositories/operation-repository.ts";

async function create(data: Prisma.OperacaoCreateInput): Promise<Operacao> {
    return operationRepository.create(data);
}

const operationService = {
    create,
};

export default operationService;