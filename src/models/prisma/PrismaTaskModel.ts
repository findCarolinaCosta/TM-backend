import { prisma } from "../../prisma";
import { ITaskTaskModel, ICreateTask, IUpdateTask } from "../ITaskModel";

export class PrismaTaskModel implements ITaskTaskModel {
  async create({ task, tags }: ICreateTask) {
    await prisma.task.create({
      data: {
        task,
        tags,
      },
    });
  }

  async readOne(id: string) {
    await prisma.task.findMany({
      where: { id },
    });
  }

  async readMany(userId: string) {
    await prisma.userTask.findMany({
      where: { userId },
      include: { tasks: true },
    });
  }

  async update({ id, task, tags }: IUpdateTask) {
    await prisma.task.update({
      where: { id },
      data: {
        task,
        tags,
      },
    });
  }

  async delete(id: string) {
    await prisma.task.delete({
      where: { id },
    });
  }
}
