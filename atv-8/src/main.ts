import { App } from "./app";

const app = new App().app;
const port = 3333;

app.listen(port, () => console.log(`Listening on port ${port}.`));