import User from "../entities/user.entity";
import RegisterValues from "../types/user";

export default class UserService {
  static async register(args: RegisterValues): Promise<User> {
    const doesExist = Boolean(User.findOne({ where: { email: args.email } }));
    if (doesExist) throw new Error("Email is already taken");

    const user = new User();

    user.firstName = args.firstName;
    user.lastName = args.lastName;
    user.email = args.email;
    user.password = args.password;

    await user.save();

    return user;
  }
}
