import jwt from "jsonwebtoken";

export const createAccessToken = (payload: object) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, "change", { expiresIn: '1d' }, (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  });
};
