import { NextFunction, Request, Response } from "express";
import { prisma } from "../config/database.ts";

export async function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const token = req.header("Authorization");
  if (!token) return generateUnauthorizedResponse(res);

  try {
    const session = await prisma.session.findFirst({
      where: {
        token,
      },
    });

    if (!session) return generateUnauthorizedResponse(res);

    return next();
  } catch (err) {
    return generateUnauthorizedResponse(res);
  }
}

function generateUnauthorizedResponse(res: Response) {
  res.status(401).send('Not authorized!');
}