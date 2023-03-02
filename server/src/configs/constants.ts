import * as dotenv from "dotenv";

dotenv.config();

export const DB = {
  HOST: process.env.DB_HOST,
  PORT: process.env.DB_PORT,
  NAME: process.env.DB_NAME,
  USER: process.env.DB_USER,
  PASS: process.env.DB_PASS,
};

export const TOKEN_KEY = process.env.TOKEN_KEY;

export const PORT = 8000;

export const ACCESS_EXPIRES = 60 * 15;
export const REFRESH_EXPIRES = 60 * 60 * 24 * 7;
