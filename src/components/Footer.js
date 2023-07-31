import React from "react";
import LogoBlanc from "../assets/LOGON.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={LogoBlanc} alt="" className="logo-blanc" />
      <p className="copyright">© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;
