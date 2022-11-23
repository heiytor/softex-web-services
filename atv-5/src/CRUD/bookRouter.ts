import { Router } from "express";
import { BookController } from "./BookController";

const bookRouter = Router();
const bookController = new BookController();

bookRouter.get('/', bookController.index);
bookRouter.get('/:id', bookController.show);
bookRouter.post('/', bookController.store);
bookRouter.put('/:id', bookController.update);
bookRouter.delete('/:id', bookController.delete);

export { bookRouter };