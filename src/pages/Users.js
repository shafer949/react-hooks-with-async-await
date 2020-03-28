import React from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../util/useFetch";
import { NotFound } from "./NotFound";

export function Users() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [data, isLoading] = useFetch(url);

  const users = data.map(user => {
    return (
      <div key={user.id} className="user">
        <div className="name">{user.name}</div>
        <div className="email">{user.email}</div>
        <div className="phone">{user.phone}</div>
        <Link to={`/user-posts/${user.id}`} className="view-more">
          View User's Posts
        </Link>
      </div>
    );
  });

  return isLoading === undefined ? (
    <NotFound />
  ) : (
    <div className="users">{users}</div>
  );
}
