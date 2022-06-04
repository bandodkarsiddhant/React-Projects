import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LandingPage from "./Components/Landing Page/LandingPage";
import { UserAuthContextProvider } from "./Context API/UserAuthContext";

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<UserPage />} />
    //     <Route path="/admin" element={<AdminPage />} />
    //   </Routes>
    // </Router>

    <UserAuthContextProvider>
      <ToastContainer />
      <LandingPage />
    </UserAuthContextProvider>
  );
}

export default App;
