import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer-div">
      <p className="footer-text">
        &copy; {new Date().getFullYear()} Albert Wang | Powered by{" "}
        <a
          href="https://github.com/saadpasta/developerFolio"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          developerFolio
        </a>
      </p>
    </div>
  );
}