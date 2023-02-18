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
import Project from "./project.entity";

@Entity("tasks")
class Task extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;
}

export default Task;
