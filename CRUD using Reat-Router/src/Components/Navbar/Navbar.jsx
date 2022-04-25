import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark  ">
      <a className="navbar-brand b4 " href="#">
        CRUD
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active ml-lg ">
            <Link
              to="/create-post"
              className="nav-link bg-info rounded-pill text-white "
              href="#"
            >
              Create Posts
            </Link>
          </li>
          <li className="nav-item active ">
            <Link to="/" className="nav-link  ">
              Posts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
