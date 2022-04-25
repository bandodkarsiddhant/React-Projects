import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "../../APIs/Axios";

const Posts = () => {
  let [state, setState] = useState(null);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    let fetchPosts = async () => {
      try {
        let { data } = await Axios.get("/posts");
        setLoading(true);
        setState(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
    setLoading(false);
  }, []);

  return (
    <div className="container my-4">
      <table className="table table-bordered table-hovered ">
        <thead className="thead-dark text-capitalize">
          <tr>
            <th>Title</th>
            <th>Details</th>
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
            state.map(post => {
              return (
                <tr key={post.id}>
                  <td>{post.title} </td>
                  <td>{post.details} </td>
                  <td>
                    <Link
                      className="btn btn-primary btn-sm"
                      to={`/edit-post/${post.id}`}
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <Link
                      className="btn btn-danger btn-sm "
                      to={`/delete-post/${post.id}`}
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Posts;
