import { Request, Response, NextFunction } from "express";

export const validateSchema =
  (schema: any) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parse(req.body);
      next();
    } catch (error: any) {
      if (Array.isArray(error.errors)) {
        return res
          .status(400)
          .json(error.errors.map((error: any) => error.message));
      }
      return res.status(400).json(error.message);
    }
  };
