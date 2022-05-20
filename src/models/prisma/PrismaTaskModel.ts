import { prisma } from '../../prisma';
import { ITaskTaskModel, ICreateTask, IUpdateTask } from '../ITaskModel';

interface ITask {
  id: string;
  task: string;
  status: number;
  createdAt: Date;
}

interface IUserTask {
  userId: string;
  taskId: string;
}

export class PrismaTaskModel implements ITaskTaskModel {
  async create({ task, status }: ICreateTask) {
    const newTask: ITask | string | null = await prisma.task.create({
      data: {
        task,
        status,
      },
    });

    return newTask;
  }

  async readOne(id: string) {
    const task: ITask[] = await prisma.task.findMany({
      where: { id },
    });

    return task;
  }

  async readMany() {
    const tasks: (IUserTask & {
      tasks: ITask | null;
    })[] = await prisma.userTask.findMany({
      include: { tasks: true },
    });

    return tasks;
  }

  async update({ id, task, status }: IUpdateTask) {
    const updatedTask: ITask = await prisma.task.update({
      where: { id },
      data: {
        task,
        status,
      },
    });

    return updatedTask;
  }

  async delete(id: string) {
    await prisma.task.delete({
      where: { id },
    });

    await prisma.userTask.delete({
      where: { taskId: id },
    });
  }
}
