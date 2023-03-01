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

  static async getPost(postId: string) {
    const post = await Post.findOne({ where: { id: postId } });
    if (!post) throw new BadRequest("Bad request the id is not valid");

    return { data: post };
  }

  static async getPosts() {
    const posts = await Post.find();

    return { data: posts };
  }
}

export default PostService;
