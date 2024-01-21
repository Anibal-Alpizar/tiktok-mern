import express, { Express } from "express";
import morgan from "morgan";
import cors from "cors";
import fileUpload from "express-fileupload";
import videosRouter from "./routes/videos.routes";
import authRouter from "./routes/auth.routes";

const app: Express = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./videos",
  })
);

app.use(morgan("dev"));
app.use(express.json());

app.use("/videos", express.static("videos"));

app.use(videosRouter);
app.use(authRouter);

export default app;
