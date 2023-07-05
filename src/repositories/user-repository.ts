import { Prisma } from "@prisma/client";
import { prisma } from "../config/database.ts";

async function create(data: Prisma.UserCreateInput) {
    return prisma.user.create({
        data
    });
}

const userRepository = {
    create,
};

export default userRepository;