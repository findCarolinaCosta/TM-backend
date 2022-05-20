import { Request, Response, NextFunction } from 'express';
import { taskCreate, taskUpdate } from './../schemas/taskSchema';
import validateSchema from '../utils/validateSchema';

interface ICreateTask {
  userId?: string;
  task: string;
  status: number;
}

interface IUpdateTask {
  id: string;
  task: string;
  status: number;
}

export class ValidateTask {
  public async execute(req: Request, res: Response, next: NextFunction) {
    const method: string = req.route.stack[0].method;
    const { id } = req.params;
    const body = req.body;
    const obj = { ...req.body, id };

    const validStatus = ![0, 1, 2].includes(obj.status);

    if (validStatus) {
      return res.status(400).json({
        message: 'Status should be 0 for pending, 1 in progress, 2 ready',
      });
    }

    const error =
      method === 'post'
        ? validateSchema<ICreateTask>(body, taskCreate)
        : validateSchema<IUpdateTask>(obj, taskUpdate);

    if (error) {
      return res.status(error.status || 400).json({ message: error.message });
    }

    next();
  }
}
