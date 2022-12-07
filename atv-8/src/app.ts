import express from 'express';
import { userRouter } from './userRouter';

class App {
  public app;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  routes() {
    this.app.use('/users', userRouter);
  }

  middlewares() {
    this.app.use(express.json());
  }
}

export { App };