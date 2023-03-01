import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinTable,
} from "typeorm";
import Post from "./post.entity";

@Entity()
class Comment extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar")
  user: string;

  @Column("varchar")
  text: string;

  @ManyToOne(() => Post, (post) => post.comments)
  post: Post;
}

export default Comment;
