export interface ICreateUser {
  username: string;
  name: string;
  job?: string;
}

export interface IUpdateUser {
  id: string;
  username: string;
  name: string;
  job?: string;
}

export interface IUserTaskModel {
  create: (data: ICreateUser) => Promise<void>;
  readOne: (userId: string) => Promise<void>;
  update: (data: IUpdateUser) => Promise<void>;
  delete: (id: string) => Promise<void>;
}
