import { Request as Req, Response as Res, NextFunction as Next } from "express";
import { TOKEN_KEY } from "../configs/constants";
import jwt from "jsonwebtoken";

const authToken = (req: any, res: Res, next: Next) => {
  const token = req.cookies.refreshToken;

  if (!token) {
    res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, TOKEN_KEY as any, (err: any, decoded: any) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.user = decoded;
    next();
  });
};

export default authToken;
