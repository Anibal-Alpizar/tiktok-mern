import express, { Express } from "express";
import morgan from "morgan";
import router from "./routes/videos.routes";

const app: Express = express();

app.use(morgan("dev"));
app.use(express.json());

app.use(router);

export default app;
