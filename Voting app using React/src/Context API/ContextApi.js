import React, { createContext, useState } from "react";

export const ContextApiProvider = createContext();

const ContextApi = ({ children }) => {
  let [display, setDisplay] = useState(true);
  let [userEmail, setUserEmail] = useState();
  let [userPassword, setUserPassword] = useState();
  let [adminRegPassword, setAdminRegPassword] = useState();
  let [confirmPassword, setConfirmPassword] = useState();
  let [adminRegEmail, setAdminRegEmail] = useState();
  let [adminPassword, setAdminPassword] = useState();
  let [adminEmail, setAdminEmail] = useState();
  let [party1Btn, setparty1Btn] = useState();
  let [party2Btn, setparty2Btn] = useState();
  let [party3Btn, setparty3Btn] = useState();
  let handleDisplay = () => {
    setDisplay(!display);
  };
  let handleSubmit_AdminLogin = e => {
    e.preventDefault();
    setAdminEmail("");
    setAdminPassword("");
  };
  let handleSubmit_AdminRegister = e => {
    e.preventDefault();
    setAdminRegEmail("");
    setAdminRegPassword("");
    setConfirmPassword("");
  };
  let handleSubmit_UserLogin = e => {
    e.preventDefault();
    setAdminRegEmail("");
    setUserEmail("");
    setUserPassword("");
  };
  return (
    <ContextApiProvider.Provider
      value={{
        handleDisplay,
        handleSubmit_AdminLogin,
        display,
        party1Btn,
        adminPassword,
        party2Btn,
        adminEmail,
        party3Btn,
        userEmail,
        userPassword,
        adminRegPassword,
        confirmPassword,
        adminRegEmail,
        setUserEmail,
        setUserPassword,
        setAdminRegPassword,
        setConfirmPassword,
        setAdminRegEmail,
        handleSubmit_AdminRegister,
        handleSubmit_UserLogin,
        setparty1Btn,
        setparty2Btn,
        setparty3Btn,
      }}
    >
      {children}
    </ContextApiProvider.Provider>
  );
};

export default ContextApi;
