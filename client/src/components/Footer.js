import React from "react";
import SocialMedia from "./SocialMedia";

export const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-inside">
        <div className="logo text-3xl app-font">OPENAUTO</div>
        <div className="nav-menu flex">
          <div className="flex items-center">
            <div className="menu-link pb-0">
              <i className="fa fa-phone"></i> +7695864558
            </div>
            <div className="menu-link pb-0">
              <i class="fa-solid fa-envelope"></i> service@openauto.ca
            </div>
          </div>
        </div>
      </div>
      <div className="footer-inside mt-5">
        <p className="secondary-text w-72 m-0">
          Open Auto @ all rights reserved
        </p>
        <SocialMedia />
      </div>
    </footer>
  );
};
