import { Request, Response, NextFunction } from "express";
import { authActions } from "../helpers/users.helper";

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await authActions.getAllUsers();
    res.status(200).json({ message: users });
  } catch (error) {
    next(error);
  }
};

export const deleteAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await authActions.deleteAllUsers();
    res.status(200).json({ message: "All users deleted" });
  } catch (error) {
    next(error);
  }
};
