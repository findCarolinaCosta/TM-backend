import { prisma } from "../../prisma";
import { IUserTaskModel, ICreateUser, IUpdateUser } from "../IUserModel";

export class PrismaUserModel implements IUserTaskModel {
  async create({ username, name, job }: ICreateUser) {
    await prisma.user.create({
      data: {
        username,
        name,
        job,
      },
    });
  }

  async readOne(id: string) {
    await prisma.user.findMany({
      where: { id },
    });
  }

  async update({ id, username, name, job }: IUpdateUser) {
    await prisma.user.update({
      where: { id },
      data: {
        username,
        name,
        job,
      },
    });
  }

  async delete(id: string) {
    await prisma.user.delete({
      where: { id },
    });
  }
}
