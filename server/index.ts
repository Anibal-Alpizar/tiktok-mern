import express, { Express } from "express";
import { PORT } from "./config";
import router from "./routes/videos.routes";

const app: Express = express();

app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
