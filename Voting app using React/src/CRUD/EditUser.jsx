import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

import Axios from "../APIs/Axios";

const EditUser = () => {
  let { id } = useParams();

  let [uname, setUname] = useState("");
  let [email, setEmail] = useState("");
  let [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  

  useEffect(() => {
    let fetchUsers = async () => {
      let { data } = await Axios.get(`/users/${id}`);
      setUname(data.uname);
      setEmail(data.email);
    };
    fetchUsers();
  }, [id]);

  let handleSubmit = async e => {
    e.preventDefault();
    let payload = { uname, email };

    try {
      await Axios.put(`/users/${id}`, payload);
      navigate("/manage-users");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <section id="authBlock" className="card ">
      <article className="card-body col-4 mx-auto bg-light my-4">
        <h2 className="text-center font-weight-bold text-dark text-uppercase my-2">
          Update User
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="">Name</label>
            <input
              type="text"
              className="form-control"
              value={uname}
              onChange={e => setUname(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="details">Email Address</label>
            <input
              type="email"
              className="form-control"
              name=""
              id=""
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-success btn-block my-2  ">
              {loading === true ? "Loading" : "Create User"}
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default EditUser;
