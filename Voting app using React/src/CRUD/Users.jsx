import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Axios from "../APIs/Axios";

const Users = () => {
  let [state, setState] = useState(null);
  let [loading, setLoading] = useState(false);

  let navigate=useNavigate()

  let goBack = () => {
    navigate(-1);
  };

  let deleteUser = async id => {
    await Axios.delete(`/users/${id}`);
    window.location.assign("/manage-users");
  };

  useEffect(() => {
    let fetchUsers = async () => {
      try {
        let { data } = await Axios.get("/users");
        setLoading(true);
        setState(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchUsers();
    setLoading(false);
  }, []);

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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            {/* Left links */}
            <div className="d-flex align-items-center">
              <button type="button" className="btn btn-link px-3 me-2" onClick={goBack}>
                Go Back
              </button>
              <button type="button" className="btn btn-primary me-3">
                <Link to="/" className="text-white">
                  Home 
                </Link>
              </button>
            </div>
          </div>
          {/* Collapsible wrapper */}
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}

      <div className="container my-4">
        <table className="table table-bordered table-hovered ">
          <thead className="thead-dark text-capitalize">
            <tr>
              <th>Name</th>
              <th>Email Address</th>
              <th>Edit </th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {state === null ? (
              <tr>
                <td>loading</td>
              </tr>
            ) : (
              state.map(user => {
                return (
                  <tr key={user.id}>
                    <td>{user.uname} </td>
                    <td>{user.email} </td>
                    <td>
                      {/* <Link className="btn btn-primary btn-sm">Edit</Link> */}

                      <Link
                        className="btn btn-primary btn-sm"
                        to={`/edit-user/${user.id}`}
                      >
                        Edit
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        // to={`/delete-user/${user.id}`}
                        onClick={() => deleteUser(user.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Users;
