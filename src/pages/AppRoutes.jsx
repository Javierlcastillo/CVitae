import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Portfolio from "./Portfolio.jsx";
import Profile from "./Profile.jsx";
import Contact from "./Contact.jsx";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
}

export default AppRoutes;