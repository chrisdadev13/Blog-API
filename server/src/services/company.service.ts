import Company from "../entities/company.entity";
import User from "../entities/user.entity";
import RegisterCompanyValues from "../types/company";

export default class CompanyService {
  static async create(args: RegisterCompanyValues) {
    const company = new Company();
    const creator = User.findOne({ where: { email: args.creator } });

    company.name = args.name;
    company.members = [...company.members, creator as any];

    await company.save();

    await creator.then((user) => {
      user.company = company;
      user.save();
    });

    return company;
  }
}
