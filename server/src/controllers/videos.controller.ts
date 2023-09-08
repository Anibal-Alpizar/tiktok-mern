import { Request, Response } from "express";

export const getVideos = (req: Request, res: Response) => {
  res.send("getting videos");
};

export const postVideo = (req: Request, res: Response) => {
  console.log(req.files);
};
