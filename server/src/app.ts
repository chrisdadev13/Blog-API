import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser";
import postRoutes from "./routes/post.route";
import commentRoutes from "./routes/comment.route";
import adminRoutes from "./routes/admin.route";

const app = express();

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/admin", adminRoutes);

export default app;
