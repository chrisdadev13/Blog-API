import { Request as Req, Response as Res } from "express";
import UserService from "../services/user.service";

class UserController {
  static async register(req: Req, res: Res) {
    try {
      const { firstName, lastName, email, password } = req.body;
      const user = await UserService.register(
        firstName,
        lastName,
        email,
        password
      );

      res.json(user);
    } catch (err) {
      res.json(err);
    }
  }
}

export default UserController;
