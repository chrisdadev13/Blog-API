import { DataSource } from "typeorm";
import { DB } from "./constants";
import User from "../modules/users/entities/user.entity";

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
      entities: [User],
    });

    AppDataSource.initialize()
      .then(() => {
        console.log("Connected to the database");
      })
      .catch((err) => console.log(err));
  }
}
