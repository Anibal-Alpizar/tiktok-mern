import { Response } from "express";

export const createCookie = (res: Response, token: string) => {
  res.cookie("token", token, {
    // httpOnly: true, // js cannot access the cookie
    // secure: true,
    // sameSite: "none",
    maxAge: 1000 * 60 * 60 * 24, // 1 day
  });
};
