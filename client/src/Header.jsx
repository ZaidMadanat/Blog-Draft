import React from "react";
import gitLogo from "./assets/gitLogo.png"
import LinkedLogo from "./assets/LinkedLogo.png"

function Header() {
  return (
    <header
      className="bg-light w-100 p-3 d-flex align-items-center justify-content-between"
      style={{width: "100%"}}
    >      <h1 className="mb-0">Days</h1>
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