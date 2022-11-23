import express from 'express';
import { studentRouter } from './entities/student/studentRouter';

class App {
  public app;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  routes() {
    this.app.use('/students/', studentRouter);
  }

  middlewares() {
    this.app.use(express.json());
  }
}

export { App };