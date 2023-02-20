import Company from "../entities/company.entity";
import User from "../entities/user.entity";
import CompanyValues from "../types/company";

export default class CompanyService {
  static async create(args: CompanyValues) {
    const company = new Company();

    company.name = args.name;
    company.members = [...company.members, args.creator];

    await company.save();

    args.creator.company = company;
    args.creator.save();

    return company;
  }
}
