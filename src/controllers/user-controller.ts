import { Request, Response } from "express";
import userService from "../services/user-service.ts";

export async function userPost(req: Request, res: Response) {
    const { email, password } = req.body;
  
    try {
      const user = await userService.create({ email, password });
      return res.status(201).json({
        id: user.id,
      });
    } catch (error) {
      return res.status(400).send(error.message);
    }
}