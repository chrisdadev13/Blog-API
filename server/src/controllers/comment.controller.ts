import { Request as Req, Response as Res, NextFunction as Next } from "express";
import CommentService from "../services/comment.service";

class CommentController {
  static async create(req: Req, res: Res) {
    const { user, text, postId } = req.body;

    const comment = await CommentService.create(user, text, postId);

    res.json(comment);
  }
  static async get(req: Req, res: Res) {
    const { postId } = req.params;
    const comments = await CommentService.get(postId);

    res.json(comments);
  }
}

export default CommentController;
