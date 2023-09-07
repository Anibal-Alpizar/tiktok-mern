import express, { Express, Request, Response } from "express";

const app: Express = express();

export const getVideos = (req: Request, res: Response) => {
  res.send("getting videos");
};
