import { Router } from "express";
import PostController from "../controllers/post.controller";

const postRoutes = Router();

postRoutes.post("/create", PostController.create);

export default postRoutes;
