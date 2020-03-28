import React from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../util/useFetch";
import { NotFound } from "./NotFound";

export function Post(props) {
    const postId = props.match.params.id;
    const getPostById = "https://jsonplaceholder.typicode.com/posts/" + postId;
    const [post, isLoadingPost] = useFetch(getPostById);
    const getUserById = "https://jsonplaceholder.typicode.com/users/" + post.userId;
    const [user, isLoadingUser] = useFetch(getUserById);

    return isLoadingUser === undefined && isLoadingPost === undefined ? (
        <NotFound />
      ) : (
            <div className="single-post">
            <div className="title">{post.title}</div>
            <div>
                By: <Link to={`/user-posts/${user.id}`}>{user.name}</Link>
            </div>
            <hr />
            <div className="body">{post.body}</div>
        </div>
    );
}
