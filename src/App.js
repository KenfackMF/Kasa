import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardDetails from "./pages/CardDetails";
import Acceuil from "./pages/Acceuil";
import APropos from "./pages/APropos";
import Erreur404 from "./pages/Erreur404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/APropos" element={<APropos />} />
        <Route path="/CardDetails/:id" element={<CardDetails />} />
        <Route path="*" element={<Erreur404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
