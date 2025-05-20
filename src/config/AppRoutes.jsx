import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Portfolio from "../pages/Portfolio.jsx";
import Profile from "../pages/Profile.jsx";
import Contact from "../pages/Contact.jsx";

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