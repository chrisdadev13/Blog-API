import Post from "../entities/post.entity";
import { BadRequest } from "../utils/errors";

class PostService {
  static async create(title: string, content: string, tags: string[]) {
    if (!content) throw new BadRequest("Request data incompatible");

    const post = new Post();
    post.title = title;
    post.content = content;
    post.tags = tags;

    await post.save();

    return { data: post };
  }
}

export default PostService;
