import { Router } from 'express';
import { UserController } from './UserController';

const userRouter = Router();
const userController = new UserController();

userRouter.get('/', userController.index);
userRouter.get('/:username', userController.show);
userRouter.post('/', userController.store);
userRouter.put('/:username', userController.update);
userRouter.delete('/:username', userController.delete);

export { userRouter };