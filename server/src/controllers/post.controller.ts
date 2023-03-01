import { Request as Req, Response as Res, NextFunction as Next } from "express";
import PostService from "../services/post.service";

class PostController {
  static async create(req: Req, res: Res) {
    const { title, content, tags } = req.body;

    const post = await PostService.create(title, content, tags);

    res.json(post);
  }
}

export default PostController;
