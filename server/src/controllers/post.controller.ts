import { Request as Req, Response as Res, NextFunction as Next } from "express";
import PostService from "../services/post.service";

class PostController {
  static async create(req: Req, res: Res) {
    const { title, content, tags } = req.body;

    const post = await PostService.create(title, content, tags);

    res.json(post);
  }

  static async getPost(req: Req, res: Res) {
    const { postId } = req.params;

    const post = await PostService.getPost(postId);

    res.json(post);
  }

  static async getPosts(req: Req, res: Res) {
    const posts = await PostService.getPosts();

    res.json(posts);
  }
}

export default PostController;
