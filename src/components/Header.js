import React from "react";
import { NavLink } from "react-router-dom";

export const Header = props => {
  return (
    <header>
      <nav>
        <NavLink to="/" exact activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/users" activeClassName="active">
          Users
        </NavLink>
        <NavLink to="/posts" activeClassName="active">
          Posts
        </NavLink>
      </nav>
    </header>
  );
};
