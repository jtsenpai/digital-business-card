import React from "react";
import image from "../images/picture-logo.png";
import mail from "../icons/mail.png";
import linkedin from "../icons/linkedin.png";

function Info() {
  return (
    <header className="info">
      <img className="profile-pic" src={image} alt="jtsenpai" width="50px" />
      <h1 className="profile-name">Jesutoni Odufeso</h1>
      <p className="profile-job">Frontend Developer</p>
      <p className="profile-link">jtsenpai.website</p>

      <div className="buttons">
        <a
          className="info-logo email"
          href="mailto:ojesutoni@gmail.com"
          target="_blank"
        >
          <img className="logo" src={mail} alt="" />
          Email
        </a>

        <a
          className="info-logo linkedin"
          href="https://www.linkedin.com/in/jesutoni-odufeso-25b1b9223/"
          target="_blank"
        >
          <img className="logo" src={linkedin} alt="" />
          Linkedin
        </a>
      </div>
    </header>
  );
}

export default Info;
