import { Router } from "express";
import CommentController from "../controllers/comment.controller";

const commentRoutes = Router();

commentRoutes.post("/create", CommentController.create);

commentRoutes.get("/get/:postId", CommentController.get);

export default commentRoutes;
