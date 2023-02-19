import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import User from "./user.entity";
import Project from "./project.entity";

export enum BugPriority {
  HIGH = "high",
  MID = "medium",
  LOW = "low",
}

export enum BugStatus {
  OPEN = "open",
  CLOSED = "closed",
  PROGRESS = "progress",
}

@Entity("bugs")
class Bug extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar", { length: 30 })
  title: string;

  @Column("varchar", { length: 120 })
  description: string;

  @Column({
    type: "enum",
    enum: BugPriority,
    default: BugPriority.LOW,
  })
  priority: BugPriority;

  @Column({
    type: "enum",
    enum: BugStatus,
    default: BugStatus.OPEN,
  })
  status: BugStatus;

  @Column()
  @ManyToOne(() => User, (user) => user.id)
  reporter: User;

  @Column()
  @CreateDateColumn()
  date: Date;
}

export default Bug;
