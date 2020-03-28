import React from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../util/useFetch";
import { NotFound } from "./NotFound";

export function Posts() {
  const getAllUserPosts = "https://jsonplaceholder.typicode.com/posts";
  const [allUserPosts, isLoadingPosts] = useFetch(getAllUserPosts);

  const allPosts = allUserPosts.map(post => {
    return (
      <div key={post.id} className="post">
        <div className="heading">
          {post.id}: {post.title}
        </div>
        <Link to={`/posts/${post.id}`} className="view-post">
          View Post
        </Link>
      </div>
    );
  });

  return isLoadingPosts === undefined ? (
    <NotFound />
  ) : (
    <div className="posts">{allPosts}</div>
  );
}
