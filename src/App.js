import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import User from "./components/User";
import Caretaker from "./components/Caretaker";
import Driver from "./components/Driver";
import UserHome from "./components/UserHome";
import CaretakerHome from "./components/CaretakerHome";
import DriverHome from "./components/DriverHome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        <Route path="/signup/user" element={<User />} />
        <Route path="/signup/caretaker" element={<Caretaker />} />
        <Route path="/signup/driver" element={<Driver />} />

        <Route path="/user/home" element={<UserHome />} />
        <Route path="/caretaker/home" element={<CaretakerHome />} />
        <Route path="/driver/home" element={<DriverHome />} />
      </Routes>
    </Router>
  );
}

export default App;
