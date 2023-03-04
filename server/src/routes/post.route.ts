import { Router } from "express";
import PostController from "../controllers/post.controller";
import authToken from "../middlewares/auth";

const postRoutes = Router();

postRoutes.post("/create", authToken, PostController.create);

postRoutes.get("/get/:postId", PostController.getPost);
postRoutes.get("/posts", PostController.getPosts);

postRoutes.patch("/edit", authToken, PostController.edit);

postRoutes.delete("/delete", authToken, PostController.delete);

export default postRoutes;
