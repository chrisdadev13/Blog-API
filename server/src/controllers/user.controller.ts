import { Request as Req, Response as Res } from "express";
import UserService from "../services/user.service";

export default class UserController {
  static async register(req: Req, res: Res) {
    const { firstName, lastName, email, password } = req.body;
    const user = await UserService.register({
      firstName,
      lastName,
      email,
      password,
    });

    res.json(user);
  }
}
