import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import PostsExerpt from "./PostsExerpt";
import {
  selectAllPosts,
  getPostsError,
  getPostsStatus,
  fetchPosts,
} from "./postsSlice";

const PostsList = () => {
  const dispatch = useDispatch();

  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

  let content;
  if (postsStatus === "loading") {
    content = <p>'loading...'</p>;
  } else if (postsStatus === "succeeded") {
    content = posts.map((post) => <PostsExerpt key={nanoid()} post={post} />);
  } else if (postsStatus === "failed") {
    content = <p>{error}</p>;
  }
  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
};

export default PostsList;
