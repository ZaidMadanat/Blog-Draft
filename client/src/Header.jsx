import React from "react";
import gitLogo from "./assets/gitLogo.png"
import LinkedLogo from "./assets/LinkedLogo.png"

function Header() {
  return (
    <header className="bg-light p-3 d-flex align-items-center justify-content-between">
      <h1 className="fs-2 m-0">Days</h1>
      <div>
        <a 
          href="https://github.com/ZaidMadanat" 
          target="_blank" 
          rel="noreferrer"
          className="me-3"
        >
          <img
            src={gitLogo}
            alt="GitHub"
            style={{ width: "32px", height: "32px" }}
          />
        </a>
        
        <a 
          href="https://www.linkedin.com/in/ZaidMadanat" 
          target="_blank" 
          rel="noreferrer"
        >
          <img
            src={LinkedLogo}
            alt="LinkedIn"
            style={{ width: "32px", height: "32px" }}
          />
        </a>
      </div>
    </header>
  );
}

export default Header;