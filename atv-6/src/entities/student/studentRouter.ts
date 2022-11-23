import { Router } from "express";
import { StudentController } from "./StudentController";

const studentRouter = Router();
const studentController = new StudentController();

studentRouter.get('/', studentController.index)
studentRouter.get('/:matriculation', studentController.show)
studentRouter.post('/', studentController.store)
studentRouter.put('/:matriculation', studentController.update)
studentRouter.delete('/:matriculation', studentController.delete)

export { studentRouter };