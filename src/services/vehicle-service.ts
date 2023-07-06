import { Veiculo, Prisma } from "@prisma/client";
import vehicleRepository from "../repositories/vehicle-repository.ts";

async function create(data: Prisma.VeiculoCreateInput): Promise<Veiculo> {
    return vehicleRepository.create(data);
}

async function readPlate(placa: number): Promise<Veiculo> {
    return vehicleRepository.readPlate(placa);
}

async function readOperation(operationId: number): Promise<Veiculo[]> {
    return vehicleRepository.readOperation(operationId);
}

async function readClientId(clientId: number): Promise<Veiculo[]> {
    return vehicleRepository.readClientId(clientId);
}

async function readAll(): Promise<Veiculo[]> {
    return vehicleRepository.readAll();
}

async function update(data: Veiculo): Promise<Veiculo> {
    return vehicleRepository.update(data);
}

const vehicleService = {
    create,
    readPlate,
    readOperation,
    readClientId,
    readAll,
    update,
};

export default vehicleService;