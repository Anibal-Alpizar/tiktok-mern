import { NextFunction, Response, Request } from "express";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(500).json({ status: "error", message: err.message });
};
