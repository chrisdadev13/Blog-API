import User from "../entities/user.entity";
import CompanyService from "./company.service";
import RegisterValues from "../types/user";
import bcrypt from "bcrypt";

export default class UserService {
  static async register(args: RegisterValues): Promise<User> {
    const doesExist = Boolean(User.findOne({ where: { email: args.email } }));
    if (!doesExist) throw new Error("Email is already taken");

    const encryptedPassword = await bcrypt.hash(args.password, 10);

    const user = new User();

    user.firstName = args.firstName;
    user.lastName = args.lastName;
    user.email = args.email;

    user.password = encryptedPassword;

    await user.save();

    return user;
  }
}
