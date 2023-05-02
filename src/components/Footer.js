import React from "react";
import twitter from "../icons/twitter.png";
import facebook from "../icons/facebook.png";
import instagram from "../icons/instagram.png";
import github from "../icons/github.png";

function Footer() {
  return (
    <footer className="footer">
      <a href="https://twitter.com/jtsenpai002" target="_blank">
        <img className="footer-logo" src={twitter} alt="twitter logo" />
      </a>
      <a href="https://www.facebook.com/jesutoni.odufeso.10" target="_blank">
        <img className="footer-logo" src={facebook} alt="facebook logo" />
      </a>
      <a href="https://www.instagram.com/jtsenpai2002/" target="_blank">
        <img className="footer-logo" src={instagram} alt="instagram logo" />
      </a>
      <a href="https://github.com/jtsenpai" target="_blank">
        <img className="footer-logo" src={github} alt="github logo" />
      </a>
    </footer>
  );
}

export default Footer;
