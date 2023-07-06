import { Veiculo, Prisma } from "@prisma/client";
import { prisma } from "../config/database.ts";

async function create(data: Prisma.VeiculoCreateInput) {
    return prisma.veiculo.create({
        data
    });
}

const vehicleRepository = {
    create,
};

export default vehicleRepository;