import React from "react";
import { Link } from "react-router-dom"

export default () => {
  return (
    <nav class="navbar navbar-light bg-dark justify-content-between">
      <a class="navbar-brand">Todo</a>
      <div class="nav navbar-nav navbar-right">
        <u className="nav navbar-nav nav-right">
         <li><Link to="/register">Sign up</Link></li>
        </u>
      </div>
    </nav>
  );
};
