export interface ICreateTask {
  task: string;
  tags?: string;
}

export interface IUpdateTask {
  id: string;
  task: string;
  tags?: string;
}

export interface ITaskTaskModel {
  create: (data: ICreateTask) => Promise<void>;
  readOne: (id: string) => Promise<void>;
  readMany: (userId: string) => Promise<void>;
  update: (data: IUpdateTask) => Promise<void>;
  delete: (id: string) => Promise<void>;
}
