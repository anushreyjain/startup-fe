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
  const options = [
    { value: "Agriculture", label: "Agriculture" },
    { value: "Agriculture & Forestry", label: "Agriculture & Forestry" },
    {
      value: "Carbon fixation and abatement",
      label: "Carbon fixation and abatement",
    },
    { value: "Coastal Zones", label: "Coastal Zones" },
    {
      value: "Cross-sectoral Enablers & Approaches",
      label: "Cross-sectoral Enablers & Approaches",
    },
    {
      value: "Early Warning and Environmental Assessment",
      label: "Early Warning and Environmental Assessment",
    },
    { value: "Energy Efficiency", label: "Energy Efficiency" },
    { value: "Forestry", label: "Forestry" },
    { value: "Human Health", label: "Human Health" },
    { value: "Industry", label: "Industry" },
    {
      value: "Infrastructure & Urban Planning",
      label: "Infrastructure & Urban Planning",
    },
    { value: "Marine & Fisheries", label: "Marine & Fisheries" },
    { value: "Renewable Energy", label: "Renewable Energy" },
    { value: "Transport", label: "Transport" },
    { value: "Waste Management", label: "Waste Management" },
    { value: "Water", label: "Water" },
  ];

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
        <Route path="/pageNotFound" element={<Template404  />} />
      </Routes>
      {/* <SlangDetailsModal /> */}
      {/* <SlangModal options={options} /> */}
    </div>
  );
};

export default App;
