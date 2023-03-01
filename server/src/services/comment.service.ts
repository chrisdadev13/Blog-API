import { FindOneOptions, FindOperator } from "typeorm";
import Comment from "../entities/comment.entity";
import Post from "../entities/post.entity";
import { BadRequest } from "../utils/errors";

class CommentService {
  static async create(user: string, text: string, postId: string) {
    if (text.length === 0)
      throw new BadRequest("Bad request, you should fill the form");

    const post = await Post.findOne({ where: { id: postId } });

    const comment = new Comment();
    comment.user = user;
    comment.text = text;
    comment.post = post;

    await comment.save();

    return { data: comment };
  }

  static async get(postId: string) {
    const post = await Post.findOne({ where: { id: postId } });
    if (!post) throw new BadRequest("Bad request, the post id is invalid");

    const comments = await Comment.find({ relations: ["post"] });
    const postComments = comments.filter(
      (comment) => comment.post.id === postId
    );

    return { data: postComments };
  }
}

export default CommentService;
