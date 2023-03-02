import { DataSource } from "typeorm";
import { DB } from "./constants";
import Post from "../entities/post.entity";
import Comment from "../entities/comment.entity";
import Admin from "../entities/admin.entity";

export default class Connection {
  static async initialize(): Promise<any> {
    const AppDataSource = new DataSource({
      type: "postgres",
      host: DB.HOST,
      port: parseInt(DB.PORT),
      username: DB.USER,
      password: DB.PASS,
      database: DB.NAME,
      synchronize: true,
      logging: true,
      entities: [Post, Comment, Admin],
    });

    AppDataSource.initialize()
      .then(() => {
        console.log("Connected to the database");
      })
      .catch((err) => console.log(err));
  }
}
