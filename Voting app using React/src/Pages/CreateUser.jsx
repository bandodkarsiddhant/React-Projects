import React, { useEffect, useState } from "react";

import { NavLink, useNavigate,Link } from "react-router-dom";
import { useUserAuth } from "../Context API/UserAuthContext2";

import Axios from "../APIs/Axios";

import "bootstrap/dist/css/bootstrap.min.css";
import { Alert } from "react-bootstrap";

const CreateUser = () => {
  let [uname, setUname] = useState("");
  let [email, setEmail] = useState("");
  let [pwd, setPwd] = useState("");
  let [confirmPwd, setConfirmPwd] = useState("");
  let [error, setError] = useState("");

  let navigate = useNavigate();

  let createUser = async e => {
    e.preventDefault();

    try {
      let payload = { uname, email,pwd };
      await Axios.post("/users", payload);
      navigate("/userlogin");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        {/* Container wrapper */}
        <div className="container">
          {/* Toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarButtonsExample">
            {/* Left links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Dashboard
                </a>
              </li>
            </ul>
            {/* Left links */}
            <div className="d-flex align-items-center">
              <button type="button" className="btn btn-link px-3 me-2">
                <Link to="/userlogin">User Login</Link>
              </button>
              <button type="button" className="btn btn-link px-3 me-2">
                <Link to="/">Admin Login</Link>
              </button>
              <button type="button" className="btn  me-3">
                <NavLink to="/manage-users">Manage Users</NavLink>
              </button>
            </div>
          </div>
          {/* Collapsible wrapper */}
        </div>
        {/* Container wrapper */}
      </nav>

      <form action="" onSubmit={createUser}>
        <div>
          <section className="vh-100 bg-image createUserBody">
            <div className="mask d-flex align-items-center h-100 gradient-custom-3 ">
              <div className="container h-100 ">
                <div className="row d-flex  justify-content-center align-items-center h-100">
                  <div className="col-12  col-md-9 col-lg-7 col-xl-6">
                    <div className="card rounded-[15px] createUser">
                      <div className="card-body p-5">
                        <h2 className="text-uppercase text-center text-white mb-5">
                          Create a user account
                        </h2>
                        {error && <Alert variant="danger"> {error} </Alert>}

                        <>
                          <div className="form-outline mb-4">
                            <input
                              type="text"
                              id="form3Example1cg"
                              className="form-control form-control-lg"
                              value={uname}
                              onChange={e => {
                                setUname(e.target.value);
                              }}
                            />
                            <label
                              className="form-label text-white"
                              htmlFor="form3Example1cg"
                            >
                              User Name
                            </label>
                          </div>

                          <div className="form-outline mb-4">
                            <input
                              type="email"
                              id="form3Example3cg"
                              className="form-control form-control-lg"
                              value={email}
                              onChange={e => {
                                setEmail(e.target.value);
                              }}
                            />
                            <label
                              className="form-label text-white"
                              htmlFor="form3Example3cg"
                            >
                              User Email
                            </label>
                          </div>

                          <div className="form-outline mb-4">
                            <input
                              type="password"
                              id="form3Example4cg"
                              className="form-control form-control-lg"
                              value={pwd}
                              onChange={e => setPwd(e.target.value)}
                            />
                            <label
                              className="form-label text-white"
                              htmlFor="form3Example4cg"
                            >
                              Password
                            </label>
                          </div>

                          <div className="form-outline mb-4">
                            <input
                              type="password"
                              id="form3Example4cdg"
                              className="form-control form-control-lg"
                              value={confirmPwd}
                              onChange={e => setConfirmPwd(e.target.value)}
                            />
                            <label
                              className="form-label text-white"
                              htmlFor="form3Example4cdg"
                            >
                              Repeat Password
                            </label>
                          </div>

                          <div className="form-check d-flex justify-content-center mb-5">
                            <input
                              className="form-check-input me-2"
                              type="checkbox"
                              value=""
                              id="form2Example3cg"
                            />
                            <label
                              className="form-check-label text-white"
                              htmlFor="form2Example3g"
                            >
                              I agree all statements in{" "}
                              <a href="#!" className="text-body ">
                                <u className="text-white">Terms of service</u>
                              </a>
                            </label>
                          </div>

                          <div className="d-flex justify-content-center">
                            <button
                              type="button"
                              className="btn btn-success btn-block btn-lg gradient-custom-4 text-body "
                              onClick={createUser}
                            >
                              Create User
                            </button>
                          </div>
                        </>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </form>
    </>
  );
};

export default CreateUser;
