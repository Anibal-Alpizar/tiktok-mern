import { Request, Response, NextFunction } from "express";
import { authActions } from "../helpers/auth.helper";

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email, password } = req.body;
  try {
    const newUser = await authActions.registerUser(name, email, password);
    res.status(200).json({ message: newUser });
  } catch (error) {
    res.status(500).json({ error: "Error while registering user" });
  }
};

