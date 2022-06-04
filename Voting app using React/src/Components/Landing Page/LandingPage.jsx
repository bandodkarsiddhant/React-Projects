import React from "react";
import UserPage from "./UserPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPage from "./AdminPage";
import AdminLogin from "./AdminLogin";
import CreateUser from "../../Pages/CreateUser";
import Users from "../../CRUD/Users";
import EditUser from "../../CRUD/EditUser";
import DeleteUser from "../../CRUD/DeleteUser";
import VotingPage from "../../Pages/Voting/VotingPage";

const LandingPage = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/userlogin" element={<UserPage />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/manage-users" element={<Users />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
        <Route path="/delete-user/:id" element={<DeleteUser />} />
        <Route path="/vote" element={<VotingPage/> } />
      </Routes>
    </Router>
  );
};

export default LandingPage;
