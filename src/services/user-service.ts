import { User } from "@prisma/client";
import { userSchema } from "../schemas/user-schema.ts";
import userRepository from "../repositories/user-repository.ts";
import bcrypt from 'bcrypt';

async function create({ email, password }: userSchema): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 12);
    return userRepository.create({
        email,
        password: hashedPassword,
    });
}

const userService = {
    create,
};

export default userService;