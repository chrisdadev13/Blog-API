import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import User from "../../users/entities/user.entity";
import Company from "./company.entity";

@Entity()
class Member extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Company, (company) => company)
  @JoinColumn({ name: "companyId" })
  company: Company;

  @ManyToOne(() => User, (user) => user)
  @JoinColumn({ name: "memberId" })
  member: User;

  @CreateDateColumn()
  joinedAt: Date;
}

export default Member;
