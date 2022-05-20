import { PrismaTaskModel } from './../models/prisma/PrismaTaskModel';
import { ITaskTaskModel } from './../models/ITaskModel';
import { Request, Response } from 'express';

interface ICreateTask {
  userId: string;
  task: string;
  status: number;
}

interface ITask {
  id: string;
  task: string;
  status: number;
}

interface IUpdateTask {
  task: string;
  status: number;
}

interface ITaskController {
  create: (req: Request, res: Response) => Promise<Response<ITask> | void>;
  readOne: (req: Request, res: Response) => Promise<Response<ITask> | void>;
  readMany: (req: Request, res: Response) => Promise<Response<ITask[]> | void>;
  update: (req: Request, res: Response) => Promise<Response<ITask> | void>;
  delete: (req: Request, res: Response) => Promise<Response<void> | void>;
}

export class TaskController implements ITaskController {
  constructor(private _service: ITaskTaskModel = new PrismaTaskModel()) {}

  public create = async (req: Request, res: Response) => {
    const data = req.body as ICreateTask;
    const createdTask = await this._service.create(data);

    return res.status(201).json(createdTask);
  };

  public readOne = async (req: Request, res: Response) => {
    const { id } = req.params;
    const task = await this._service.readOne(id);

    return res.status(200).json(task);
  };

  public readMany = async (_req: Request, res: Response) => {
    const tasks = await this._service.readMany();

    return res.status(200).json(tasks);
  };

  public update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = req.body as IUpdateTask;
    const updatedTask = await this._service.update({ ...data, id });

    return res.status(200).json(updatedTask);
  };

  public delete = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this._service.delete(id);

    return res.status(204).json();
  };
}
