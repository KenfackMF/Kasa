// Routes.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardAppartements from "./CardAppartements";
import CardDetails from "./CardDetails";
import APropos from "./APropos";
import Erreur404 from "./Erreur404";

function Routage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={CardAppartements} />
        <Route path="/a-propos" element={APropos} />
        <Route path="/details/:id" element={CardDetails} />
        <Route component={Erreur404} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routage;
