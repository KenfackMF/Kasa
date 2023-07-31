import React from "react";
import "./styles/index.scss";
import Header from "./components/Header";
import Banner from "./components/Banner";
import CardAppartements from "./components/CardAppartements";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <CardAppartements />
      <Footer />
    </div>
  );
}

export default App;
