import { Router } from "express";

const homeRouter = Router();

homeRouter.get('/', (req, res) => {
    return res.json('Hello World!');
})

export { homeRouter };