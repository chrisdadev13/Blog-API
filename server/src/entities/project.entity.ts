import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import Company from "./company.entity";
import User from "./user.entity";

@Entity("projects")
class Project extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;
}

export default Project;
