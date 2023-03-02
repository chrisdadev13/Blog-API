import Admin from "../entities/admin.entity";
import bcrypt from "bcrypt";
import { NotFound, Unauthorized } from "../utils/errors";
import Jwt from "../utils/jwt";

class AdminService {
  static async create(name: string, password: string) {
    const admin = new Admin();

    const encryptedPassword = await bcrypt.hash(password, 10);

    admin.name = name;
    admin.password = encryptedPassword;

    await admin.save();

    return { data: admin };
  }

  static async login(name: string, password: string) {
    const admin = await Admin.findOne({ where: { name: name } });
    if (!admin)
      throw new NotFound("Contact me if you want to try the app, contact me.");

    const validPassword = await bcrypt.compare(password, admin.password);
    if (!validPassword)
      throw new Unauthorized(
        "Invalid password, contact me if you want to try the app"
      );

    const accessToken = Jwt.accessToken(admin.name, admin.id);
    const refreshToken = Jwt.refreshToken(admin.name, admin.id);

    return {
      admin: admin,
      access: accessToken,
      refresh: refreshToken,
    };
  }
}

export default AdminService;
