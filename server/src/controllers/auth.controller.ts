import { Request, Response, NextFunction } from "express";
import { authActions } from "../helpers/auth.helper";

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await authActions.getUserByEmail(email);

    if (existingUser)
      return res
        .status(400)
        .json({ error: "User with this email already exists" });

    const newUser = await authActions.registerUser(name, email, password);
    res.status(200).json({ message: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error while registering user" });
    next(error);
  }
};

