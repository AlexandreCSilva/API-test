import { Prisma } from "@prisma/client";
import { prisma } from "../config/database.ts";

async function create(data: Prisma.UserCreateInput) {
    return prisma.user.create({
        data
    });
}

async function readEmail(email: string) {
    return prisma.user.findFirst({
        where: {
            email
        }
    });
}

const userRepository = {
    create,
    readEmail,
};

export default userRepository;