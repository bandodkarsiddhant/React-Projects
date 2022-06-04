import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Alert } from "react-bootstrap";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useUserAuth } from "../../Context API/UserAuthContext";

import "./PageStyle.css";

const AdminLogin = () => {
  let [email, setEmail] = useState("");
  let [pwd, setPwd] = useState("");
  let [error, setError] = useState("");

  let navigate = useNavigate();

  const { logIn } = useUserAuth();

  let handleSubmit = async e => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, pwd);
      toast.success("Admin Successfully logged in");
      navigate("/create-user");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="adminPageBody">
      <article>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <section className="vh-100 gradient-custom ">
              <div className="container py-5   ">
                <div className="row d-flex justify-content-center align-items-center h-100 ">
                  <div className="col-12 col-md-8 col-lg-6 col-xl-5 ">
                    <div className="card bg-dark text-white rounded-[1rem] adminPage">
                      <div className="card-body p-5 text-center">
                        <div className="mb-md-5 mt-md-4 pb-5">
                          <h2 className="fw-bold mb-2 text-uppercase ">
                            Admin Login
                          </h2>
                          {error && <Alert variant="danger"> {error} </Alert>}
                          <p className="text-white-50 mb-5">
                            Please enter your login and password!
                          </p>

                          <div className="form-outline form-white mb-4">
                            <input
                              type="email"
                              id="typeEmailX"
                              className="form-control form-control-lg"
                              value={email}
                              onChange={e => setEmail(e.target.value)}
                            />
                            <label className="form-label" htmlFor="typeEmailX">
                              Email
                            </label>
                          </div>

                          <div className="form-outline form-white mb-4">
                            <input
                              type="password"
                              id="typePasswordX"
                              className="form-control form-control-lg"
                              value={pwd}
                              onChange={e => setPwd(e.target.value)}
                            />
                            <label
                              className="form-label"
                              htmlFor="typePasswordX"
                            >
                              Password
                            </label>
                          </div>

                          <p className="small mb-5 pb-lg-2">
                            <a className="text-white-50" href="#!">
                              Forgot password?
                            </a>
                          </p>

                          <button
                            className="btn btn-outline-light btn-lg px-5"
                            type="submit"
                            onClick={handleSubmit}
                          >
                            Login
                          </button>

                          <div className="d-flex justify-content-center text-center mt-4 pt-1">
                            <a href="#!" className="text-white">
                              <i className="fab fa-facebook-f fa-lg"></i>
                            </a>
                            <a href="#!" className="text-white">
                              <i className="fab fa-twitter fa-lg mx-4 px-2"></i>
                            </a>
                            <a href="#!" className="text-white">
                              <i className="fab fa-google fa-lg"></i>
                            </a>
                          </div>
                        </div>

                        <div>
                          <p className="mb-0">
                            Don't have an account?{" "}
                            <NavLink to="/admin">Admin</NavLink>
                          </p>
                        </div>
                        <div>
                          <p className="mb-0">
                            <NavLink to="/userlogin">User Login</NavLink>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </form>
      </article>
    </section>
  );
};

export default AdminLogin;
