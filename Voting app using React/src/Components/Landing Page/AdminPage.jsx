import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../Context API/UserAuthContext";

import { Alert } from "react-bootstrap";

const AdminPage = () => {
  let [uname, setUname] = useState("");
  let [email, setEmail] = useState("");
  let [pwd, setPwd] = useState("");
  let [confirmPwd, setConfirmPwd] = useState("");
  let [error, setError] = useState("");

  const navigate = useNavigate();

  const { signUp } = useUserAuth();

  let handleSubmit = async e => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, pwd);
      navigate("/userlogin");
    } catch (err) {
      setError(err.message);
    }
  };

  // let handleAlert = () => {
  //   prompt("Enter the admin pin");
  // };

  // let alertFun = () => {
  //   window.addEventListener("load", handleAlert);
  // };

  // useEffect(() => {
  //   alertFun();
  // }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        {/* Container wrapper */}
        <div className="container">
          
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
              
            </ul>
            {/* Left links */}
            <div className="d-flex align-items-center">
              <button type="button" className="btn btn-link px-3 me-2">
                Login
              </button>
              <button type="button" className="btn btn-primary me-3">
                <Link to='/manage-users' className="text-white">Manage Users</Link>
              </button>
              
            </div>
          </div>
          {/* Collapsible wrapper */}
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}

      <form action="" onSubmit={handleSubmit}>
        <div>
          <h1>Admin page</h1>
          <section className="vh-100 bg-image">
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
              <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                    <div className="card rounded-[15px]">
                      <div className="card-body p-5">
                        <h2 className="text-uppercase text-center mb-5">
                          Create an account
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
                              className="form-label"
                              htmlFor="form3Example1cg"
                            >
                              Admin Name
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
                              className="form-label"
                              htmlFor="form3Example3cg"
                            >
                              Admin Email
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
                              className="form-label"
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
                              className="form-label"
                              htmlFor="form3Example4cdg"
                            >
                              Repeat password
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
                              className="form-check-label"
                              htmlFor="form2Example3g"
                            >
                              I agree all statements in{" "}
                              <a href="#!" className="text-body">
                                <u>Terms of service</u>
                              </a>
                            </label>
                          </div>

                          <div className="d-flex justify-content-center">
                            <button
                              type="button"
                              className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                              onClick={handleSubmit}
                            >
                              Register
                            </button>
                          </div>

                          <p className="text-center text-muted mt-5 mb-0">
                            Have already an account?{" "}
                            <NavLink to="/">Login here</NavLink>
                          </p>
                          <p className="text-center text-muted mt-5 mb-0">
                            <NavLink to="/userlogin">User Login</NavLink>
                          </p>
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

export default AdminPage;
