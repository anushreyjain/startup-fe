import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { useForm } from "react-hook-form";
import SlangDetailsModal from "./organism/SlangDetailsModal";
import SlangModal from "./organism/SlangModal";
import Dashboard from "./templates/Dashboard";
import { Auth } from "aws-amplify";
import Login from "./templates/Login";
import { getFromPublic } from "./utils/public.api";
import Template404 from "./templates/Template404";

const App = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  console.log(user);
  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((currentUser) => {
        setUser(currentUser);
        localStorage.setItem(
          "authToken",
          currentUser.signInUserSession.idToken.jwtToken
        );
        localStorage.setItem("username", currentUser.username);
        navigate("/dashboard", { replace: true });
      })
      .catch(() => console.log("Not signed in"));
  }, []);

  return (
    <div className="bg-primary-300 h-screen">
      <Routes>
        <Route path="/" element={<Dashboard user={user} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard user={user} />} />
      </Routes>
      {/* <SlangDetailsModal /> */}
      {/* <SlangModal options={options} /> */}
    </div>
  );
};

export default App;
