import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  ManyToMany,
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
  @JoinColumn()
  manager: User;

  @Column()
  @CreateDateColumn()
  startDate: Date;

  @Column()
  @CreateDateColumn()
  endDate: Date;

  @Column("varchar", { array: true })
  tags: string[];

  @Column()
  @ManyToMany(() => User, (user) => user.id)
  assignedUsers: string[];
}

export default Project;
