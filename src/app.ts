import express from 'express';
import cors from 'cors';
import routes from './routes';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
    this.middlewares();
  }

  private config(): void {
    this.app
      .use(
        cors({
          origin: '*',
          methods: ['GET', 'POST', 'PUT', 'DELETE'],
          allowedHeaders: '*',
        })
      )
      .use(express.json());
  }

  private middlewares(): void {
    // routes
    this.app.use(routes.taskRoutes);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () =>
      console.log(`Server is running on port: ${PORT}`)
    );
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();
