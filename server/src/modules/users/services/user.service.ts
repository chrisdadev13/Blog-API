import User from "../entities/user.entity";
import bcrypt from "bcrypt";
import { Conflict } from "../../../configs/errors";

class UserService {
  static async register(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) {
    const doesExist = Boolean(await User.findOne({ where: { email: email } }));
    if (doesExist) throw new Conflict("Email address is already taken");

    const encryptedPassword = await bcrypt.hash(password, 10);

    const user = new User();

    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.password = encryptedPassword;

    await user.save();

    return {
      user,
    };
  }
}

export default UserService;
