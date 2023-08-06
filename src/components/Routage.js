// Routes.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import CardAppartements from "./CardAppartements";
import CardDetails from "./CardDetails";
import APropos from "../pages/APropos";
import Erreur404 from "../pages/Erreur404";

function Routage() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={CardAppartements} />
        <Route path="/a-propos" element={APropos} />
        <Route path="/details/:id" element={CardDetails} />
        <Route path="*" element={<Erreur404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routage;
