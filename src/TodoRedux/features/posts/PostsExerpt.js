import React from "react";
import PostAuthor from "./PostAuthor";

const PostsExerpt = ({ post }) => {
  return (
    <article>
      <h3>{post.title}</h3>

      <p>{post.body.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
      </p>
    </article>
  );
};

export default PostsExerpt;
