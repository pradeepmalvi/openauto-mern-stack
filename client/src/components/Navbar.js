import React from "react";

export const Navbar = () => {
  return (
    <nav className="navbar text-white">
      <div className="logo text-3xl app-font">OPENAUTO</div>
      <div className="nav-menu flex">
        <div className="flex items-center">
          <div className="menu-link mr-10 pb-0">
            <i className="fa fa-phone"></i> +7695864558
          </div>
          <div className="menu-link mr-10 pb-0">
            <i class="fa-solid fa-envelope"></i> service@openauto.ca
          </div>
        </div>
        <div className="btn-primary">Download the mobile app</div>
      </div>
    </nav>
  );
};
