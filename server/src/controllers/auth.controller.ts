import { Request, Response, NextFunction } from "express";
import { authActions } from "../helpers/auth.helper";
import { createAccessToken } from "../libs/jwt";

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

    const token = await createAccessToken({ id: newUser.id });

    res.cookie("token", token, {
      // httpOnly: true, // js cannot access the cookie
      // sameSite: "none",
      // secure: true,
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    });

    res.status(200).json({ message: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error while registering user" });
    next(error);
  }
};

export const signin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const existingUser = await authActions.getUserByEmail(email);
    if (!existingUser) return res.status(400).json({ error: "User not found" });
    const user = await authActions.loginUser(email, password);
    if (!user) return res.status(400).json({ error: "Invalid password" });

    const token = await createAccessToken({ id: user.id });
    res.cookie("token", token, {
      // httpOnly: true, // js cannot access the cookie
      // secure: true,
      // sameSite: "none",
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    });

    res.status(200).json({ message: user });
  } catch (error) {
    res.status(500).json({ error: "Error while logging in" });
  }
};

export const signout = (req: Request, res: Response) => {
  if (!req.cookies.token)
    return res.status(400).json({ error: "User is not logged in" });
  res.clearCookie("token");
  res.status(200).json({ message: "User signed out successfully" });
};
