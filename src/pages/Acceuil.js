import React from "react";
import "./styles/index.scss";
import Header from "./components/Header";
import Banner from "./components/Banner";
import CardAppartements from "./components/CardAppartements";
import Footer from "./components/Footer";
import Routage from "./components/Routage";

function Acceuil() {
  return (
    <div>
      <Header />
      <Banner />
      <CardAppartements />
      <Footer />
      <Routage />
    </div>
  );
}

export default Acceuil;
