import {
  Entity,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  OneToMany,
  ManyToMany,
  JoinTable,
  PrimaryGeneratedColumn,
  JoinColumn,
} from "typeorm";
import User from "./user.entity";
import Project from "./project.entity";

@Entity("companies")
class Company extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar", { length: 30 })
  name: string;

  @Column()
  @OneToMany(() => User, (user) => user.id)
  admin: User[];

  @Column()
  @OneToMany(() => User, (user) => user.email)
  @JoinColumn()
  members: User[];

  @Column()
  @OneToMany(() => Project, (project) => project.id)
  @JoinColumn()
  projects: Project[];
}

export default Company;
