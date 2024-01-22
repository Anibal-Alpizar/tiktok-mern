import express, { Express } from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import videosRouter from "./routes/videos.routes";
import authRouter from "./routes/auth.routes";
import userRouter from "./routes/users.routes";
import { errorHandler } from "./middleware/error.middleware";
import dotenv from "dotenv";

const app: Express = express();

// Settings
dotenv.config();

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

// Middlewares
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());

// Static files
app.use("/videos", express.static("videos"));

// Routes
app.use(videosRouter);
app.use(authRouter);
app.use(userRouter);

// Error handling
app.use(errorHandler);

export default app;
