import React from "react";
import "./styles.css";
import { Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Users } from "./pages/Users";
import { Posts } from "./pages/Posts";
import { Post } from "./pages/Post";
import { UserPosts } from "./pages/UserPosts";

export const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/users" component={Users} />
          <Route path="/user-posts/:id" component={UserPosts} />
          <Route path="/posts" exact component={Posts} />
          <Route path="/posts/:id" component={Post} />
        </Switch>
      </div>
      <Footer />
    </>
  );
};
