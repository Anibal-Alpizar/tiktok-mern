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
import fs from "fs";

const app: Express = express();

// Settings
if (!fs.existsSync(".env")) {
  console.error("No .env file found");
  process.exit(1);
}
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
