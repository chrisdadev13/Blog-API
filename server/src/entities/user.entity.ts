import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  OneToMany,
  JoinTable,
  JoinColumn,
} from "typeorm";
import Company from "./company.entity";
import Project from "./project.entity";

@Entity("users")
class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column("varchar", { length: 30 })
  firstName: string;

  @Column("varchar", { length: 30 })
  lastName: string;

  @Column({ unique: true, length: 30 })
  email: string;

  @Column("varchar", { length: 30 })
  password: string;

  @Column("varchar")
  @OneToOne(() => Company, (company) => company.id)
  @JoinColumn()
  company: Company;

  @Column("boolean", { default: false })
  role: boolean;

  @Column()
  @OneToMany(() => Project, (project) => project.id)
  projects: Project[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export default User;
