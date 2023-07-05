import { User } from "@prisma/client";
import { userSchema } from "../schemas/user-schema.js";
import userRepository from "../repositories/user-repository.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import sessionRepository from "../repositories/session-repository.js";

async function signIn({ email, password }: userSchema): Promise<SignInResult> {
    const user = await getUserOrFail(email);
  
    await validatePasswordOrFail(password, user.password);    
  
    const token = await createSession(user.id);

    delete user["password"];
  
    return {
        user: user,
        token,
    };
}

async function getUserOrFail(email: string): Promise<User> {
    const user = await userRepository.readEmail(email);
    if (!user) throw new Error("No user with this email!");

    return user;
}
  
async function createSession(userId: number) {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET);
    await sessionRepository.create({
        token,
        userId,
    });

    return token;
}
  
async function validatePasswordOrFail(password: string, userPassword: string) {
    const isPasswordValid = await bcrypt.compare(password, userPassword);
    
    if (!isPasswordValid) throw new Error("Password is invalid!");
}

type SignInResult = {
    user: Pick<User, "id" | "email">;
    token: string;
};

const authService = {
    signIn,
};

export default authService;