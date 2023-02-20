import * as dotenv from "dotenv";

dotenv.config();

export const DB = {
  HOST: process.env.DB_HOST,
  PORT: process.env.DB_PORT,
  NAME: process.env.DB_NAME,
  USER: process.env.DB_USER,
  PASS: process.env.DB_PASS,
};

export const PORT = 8000;
