import React from "react";
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";
import "../Footer/Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-heading">Made by KJ | © | 2024</div>
      <ul className="nav-items">
        <li className="nav-item">
          <a href="/" target="_blank">
            <span className="nav-icon">
              <BsGithub title="Github" />
            </span>
          </a>
        </li>

        <li className="nav-item">
          <a href="/" target="_blank">
            <span className="nav-icon">
              <BsTwitter title="Twitter" />
            </span>
          </a>
        </li>

        <li className="nav-item">
          <a
            href="/"
            target="_blank"
          >
            <span className="nav-icon">
              <BsLinkedin title="LinkedIn" />
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};
