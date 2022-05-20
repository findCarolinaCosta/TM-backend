import { Router } from 'express';
import { TaskController } from '../controllers/TaskController';
import { ValidateTask } from '../middlewares/validateTask';

export const taskRoutes = Router();
const taskController = new TaskController();
const validateTask = new ValidateTask();
const taskParamId = '/task/:id';

taskRoutes.post('/task', validateTask.execute, taskController.create);
taskRoutes.get(taskParamId, taskController.readOne);
taskRoutes.get('/tasks', taskController.readMany);
taskRoutes.put(taskParamId, validateTask.execute, taskController.update);
taskRoutes.delete(taskParamId, taskController.delete);
