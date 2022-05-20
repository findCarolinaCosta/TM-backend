export interface ICreateTask {
  userId?: string;
  task: string;
  status: number;
}

export interface IUpdateTask {
  id: string;
  task: string;
  status: number;
}

interface ITask {
  id: string;
  task: string;
  status: number;
  createdAt: Date;
}

// interface IUserTask {
//   userId: string;
//   taskId: string;
// }

export interface ITaskTaskModel {
  create: (data: ICreateTask) => Promise<ITask | string | null>;
  readOne: (id: string) => Promise<ITask | null>;
  readMany: () => Promise<ITask[]>;
  update: (data: IUpdateTask) => Promise<ITask>;
  delete: (id: string) => Promise<void>;
}
