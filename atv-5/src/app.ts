import express from 'express';
import { bookRouter } from './CRUD/bookRouter';

class App {
    public app;

    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    routes() {
        this.app.use('/books', bookRouter);
    }

    middlewares() {
        this.app.use(express.json());
    }
}

export { App };