import { User } from "@prisma/client";
import { userSchema } from "../schemas/user-schema.ts";
import userRepository from "../repositories/user-repository.ts";

async function create({ email, password }: userSchema): Promise<User> {
    return await userRepository.create({ email, password });
}

const userService = {
    create,
};

export default userService;