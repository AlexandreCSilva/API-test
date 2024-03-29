import { Prisma } from "@prisma/client";
import { prisma } from "../config/database.ts";

async function create(data: Prisma.SessionUncheckedCreateInput) {
  return prisma.session.create({
    data,
  });
}

const sessionRepository = {
  create,
};

export default sessionRepository;