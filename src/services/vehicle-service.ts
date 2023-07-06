import { Veiculo, Prisma } from "@prisma/client";
import vehicleRepository from "../repositories/vehicle-repository.ts";

async function create(data: Prisma.VeiculoCreateInput): Promise<Veiculo> {
    return vehicleRepository.create(data);
}

const vehicleService = {
    create,
};

export default vehicleService;