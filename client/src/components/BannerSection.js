import React from "react";
import Form from "./Form";
import SocialMedia from "./SocialMedia";

const BannerSection = () => {
  return (
    <div className="banner-section">
      <div className="banner-wrapper text-white">
        <div className="left-section flex flex-col justify-center">
          <h1 className="heading-font text-5xl font-bold secondary-text">
            Vehicle Maintenance From The Comfort of Your Home
          </h1>
          <p className="text-1xl my-10 secondary-text">
            Open Auto Soothes the hassle of maintaining your vehicle and helps{" "}
            your deal with unexpected repairs worry-free
          </p>
          <Form />
        </div>
        <div className="right-section">
          <img src="images/Pickup_Illustration.png" alt="Pickup_Illustration" />
        </div>
      </div>
      <SocialMedia />
    </div>
  );
};

export default BannerSection;
