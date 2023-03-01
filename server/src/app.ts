import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import postRoutes from "./routes/post.route";
import commentRoutes from "./routes/comment.route";

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);

export default app;
