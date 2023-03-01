import { Router } from "express";
import PostController from "../controllers/post.controller";

const postRoutes = Router();

postRoutes.post("/create", PostController.create);

postRoutes.get("/get/:postId", PostController.getPost);
postRoutes.get("/get/posts", PostController.getPosts);

export default postRoutes;
