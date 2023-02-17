import "reflect-metadata";
import { DataSource } from "typeorm";
import { db } from "../config/environment/constants";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: db.host,
  port: db.port,
  username: db.user,
  password: db.password,
  database: db.name,
  synchronize: true,
  logging: false,
  entities: ["db/entities/**/*.ts"],
  migrations: [],
  subscribers: [],
});
