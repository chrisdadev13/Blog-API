import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinTable,
} from "typeorm";
import Comment from "./comment.entity";

@Entity()
class Post extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar")
  title: string;

  @Column("varchar")
  content: string;

  @Column({
    type: "varchar",
    array: true,
    default: [],
  })
  tags: string[];

  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[];

  @Column("varchar", { default: "Chris" })
  author: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export default Post;
