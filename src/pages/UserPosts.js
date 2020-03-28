import React from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../util/useFetch";
import { NotFound } from "./NotFound";

export function UserPosts(props) {
  const userId = props.match.params.id;
  const getUserById = "https://jsonplaceholder.typicode.com/users/" + userId;
  const getPostsByUserId =
    "https://jsonplaceholder.typicode.com/posts?userId=" + userId;
  const [user, isLoadingUser] = useFetch(getUserById);
  const [posts, isLoadingPosts] = useFetch(getPostsByUserId);

  const userPosts = posts.map(post => {
    return (
      <div key={post.id} className="post">
        <div>
          {post.id} - {post.title}
        </div>
        <Link to={`/posts/${post.id}`} className="view-post">
          View Post
        </Link>
      </div>
    );
  });

  return isLoadingUser === undefined && isLoadingPosts === undefined ? (
    <NotFound />
  ) : (
    <div>
      <div className="user-posts">Posts by {user.name}</div>
      <div className="posts">{userPosts}</div>
    </div>
  );
}
