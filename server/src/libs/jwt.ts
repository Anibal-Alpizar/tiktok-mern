import jwt, { Secret } from "jsonwebtoken";

export const createAccessToken = (payload: object) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      process.env.JWT_SECRET as Secret,
      { expiresIn: "1d" },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
};
