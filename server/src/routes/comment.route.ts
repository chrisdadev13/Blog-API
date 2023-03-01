import { Router } from "express";
import CommentController from "../controllers/comment.controller";

const commentRoutes = Router();

commentRoutes.post("/create", CommentController.create);

export default commentRoutes;
