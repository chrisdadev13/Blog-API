import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import Company from "./company.entity";
import User from "./user.entity";

@Entity("projects")
class Project extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar", { length: 30 })
  name: string;

  @Column("varchar", { length: 120 })
  description: string;

  @Column()
  @ManyToOne(() => User, (user) => user.id)
  manager: User;
}

export default Project;
