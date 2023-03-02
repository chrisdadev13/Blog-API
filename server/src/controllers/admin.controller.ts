import { Request as Req, Response as Res } from "express";
import AdminService from "../services/admin.service";
import { ACCESS_EXPIRES, REFRESH_EXPIRES } from "../configs/constants";

class AdminController {
  static async create(req: Req, res: Res) {
    const { name, password } = req.body;

    const admin = await AdminService.create(name, password);

    res.json(admin);
  }

  static async login(req: Req, res: Res) {
    const { name, password } = req.body;
    try {
      const { admin, access, refresh } = await AdminService.login(
        name,
        password
      );

      res.cookie("accessToken", access, {
        maxAge: ACCESS_EXPIRES,
        ...{ httpOnly: true },
      });

      res.cookie("refreshToken", refresh, {
        maxAge: REFRESH_EXPIRES,
        ...{ httpOnly: true },
      });

      res.json(admin);
    } catch (err) {
      res.json(err);
    }
  }
}

export default AdminController;
