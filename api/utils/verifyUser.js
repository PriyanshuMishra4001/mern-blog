// import { Jwt } from "jsonwebtoken";
// import { errorHandler } from "./error.js";
// export const verifyToken = (req, res, next) => {
//   const token = req.cookies.access_token;
//   if (!token) {
//     return next(errorHandler(401, "Unauthorized"));
//   }
//   Jwt.verifyToken(token, "Mishra", (err, user) => {
//     if (err) {
//       return next(errorHandler(401, "Unauthorized"));
//     }
//     req.user = user;
//     next();
//   });
// };
import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(errorHandler(401, "Unauthorized"));
  }
  jwt.verify(token, "Mishra", (err, user) => {
    if (err) {
      return next(errorHandler(401, "Unauthorized"));
    }
    req.user = user;
    next();
  });
};
