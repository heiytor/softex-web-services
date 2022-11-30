import express from 'express';
import { homeRouter } from './homeRouter';

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    routes() {
        this.app.use('/', homeRouter);
    }

    middlewares() {
        this.app.use(express.json());
    }
}

export { App };