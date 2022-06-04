// import React, { useState, useEffect } from "react";

// import Axios from "../APIs/Axios";

// import { Link } from "react-router-dom";
// import { async } from "@firebase/util";

// const DeleteUser = () => {
//   let [state, setState] = useState("");
//   let [loading, setLoading] = useState(false);

//   let deleteUser = async id => {
//     await Axios.delete(`/users/${id}`);
//     window.location.assign("/manage-users");
//   };

//   useEffect(() => {
//     let fetchUser = async () => {
//       try {
//         let { data } = await Axios.get("/users");
//         setLoading(true);
//         setState(data);
//       } catch (error) {
//         console.log(error.message);
//       }
//     };
//     fetchUser();
//     setLoading(false);
//   },[]);

//   return (
//     <div className="container my-4">
//       <table className="table table-bordered table-hovered ">
//         <thead className="thead-dark text-capitalize">
//           <tr>
//             <th>Name</th>
//             <th>Email Address</th>
//             <th>Edit </th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {state === null ? (
//             <tr>
//               <td>loading</td>
//             </tr>
//           ) : (
//             state.map(user => {
//               return (
//                 <tr key={user.id}>
//                   <td>{user.uname} </td>
//                   <td>{user.email} </td>
//                   <td>
//                     {/* <Link className="btn btn-primary btn-sm">Edit</Link> */}

//                     <Link
//                       className="btn btn-primary btn-sm"
//                       to={`/edit-user/${user.id}`}
//                     >
//                       Edit
//                     </Link>
//                   </td>
//                   <td>
//                     <button
//                       className="btn btn-btn-danger btn-sm"
//                       onClick={() => deleteUser(user.id)}
//                     >
//                       Edit
//                     </button>
//                   </td>
//                 </tr>
//               );
//             })
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DeleteUser;
