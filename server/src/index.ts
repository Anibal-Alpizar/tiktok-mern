import express from "express";
import app from "./app";
import { PORT } from "./config";
import { connectDB } from "./db";
import path from "path";

connectDB()

app.use('/videos', express.static(path.join(__dirname, 'videos')));


app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
