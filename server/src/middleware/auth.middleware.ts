import jwt, { Secret } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const isAuth = (
  req: Request & { userId: string },
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  jwt.verify(
    token,
    process.env.JWT_SECRET as Secret,
    (err: any, decodedToken: any) => {
      if (err) return res.status(401).json({ message: "Unauthorized" });
      else req.userId = decodedToken.id;
      next();
    }
  );
};
