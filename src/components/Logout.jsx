import React, { useContext } from "react";
import { AuthContext } from "../contects/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Logout = () => {
  const { logOut } = useContext(AuthContext);
  const location = useLocation();
  const navigator = useNavigate();

  const from = location.state?.form?.pathname || "/";

  const handleLogout = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        alert("Sign-out successful");
        navigator(from, { replace: true });
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="h-screen bg-teal-100 fleax items-center justify-center">
      <button
        className=" bg-red-700  px-4 py -3 text-white rounded m-10"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;

Logout;
