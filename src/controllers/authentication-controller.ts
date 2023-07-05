import { Request, Response } from "express";
import authService from "../services/authentication-service.ts";

export async function authPost(req: Request, res: Response) {
    const { email, password } = req.body;
  
    try {
      const client = await authService.signIn({ email, password });
      return res.status(200).json(client);
    } catch (error) {
      return res.status(400).send(error.message);
    }
}