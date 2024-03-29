import React, { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Dashboard from "./templates/Dashboard";
import { Auth } from "aws-amplify";
import Login from "./templates/Login";
import { getFromUser } from "./apis/user.api";

const App = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  // console.log(user);

  const setToken = async (currentUser) => {
    localStorage.setItem(
      "authToken",
      currentUser.signInUserSession.idToken.jwtToken
    );
    localStorage.setItem("username", currentUser.username);
  };

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(async (currentUser) => {
        setUser(currentUser);
        setToken(currentUser);
        await getFromUser({
          query: "createUpdateUser",
          fields: ["_id"],
          variables: {},
        });
        navigate("/dashboard");
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
