import { FC } from "react";
import { IPost } from "../types/types";

type PostCardProps = {
  post: IPost;
};

const PostCard: FC<PostCardProps> = ({ post }) => {
  return (
    <div>
      {post.title} {post.excerpt}
    </div>
  );
};

export default PostCard;
