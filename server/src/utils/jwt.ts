import jwt from "jsonwebtoken";
import { TOKEN_KEY } from "../configs/constants";

class Jwt {
  static accessToken(name: string, id: string) {
    const userToAccess = {
      name: name,
      id: id,
    };

    return jwt.sign(userToAccess, TOKEN_KEY, {
      expiresIn: "15min",
    });
  }

  static refreshToken(name: string, id: string) {
    const userToRefresh = {
      name: name,
      id: id,
    };

    return jwt.sign(userToRefresh, TOKEN_KEY, {
      expiresIn: "7d",
    });
  }

  static verifyToken(token: string) {
    try {
      const decoded = jwt.verify(token, TOKEN_KEY);
      return { payload: decoded, expired: false };
    } catch (err) {
      return err;
    }
  }
}

export default Jwt;
