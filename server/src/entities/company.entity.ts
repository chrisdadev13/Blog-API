import {
  Entity,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  ManyToMany,
  JoinTable,
  PrimaryGeneratedColumn,
  JoinColumn,
} from "typeorm";
import User from "./user.entity";

@Entity("companies")
class Company extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar", { length: 30 })
  name: string;

  @OneToOne(() => User)
  @JoinColumn()
  admin: User;

  @ManyToMany(() => User)
  members: User[];
}

export default Company;
