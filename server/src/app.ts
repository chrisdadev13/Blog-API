import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import userRouter from "./routes/user.route";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", userRouter);

export default app;
