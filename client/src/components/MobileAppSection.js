import React from "react";

const MobileAppSection = () => {
  return (
    <div className="mobile-app-section text-white">
      <div className="left-section">
        <img src="images/picku_service.png" alt="" />
      </div>
      <div className="right-section">
        <h1 className="heading-font text-5xl font-bold secondary-text">
          Focused on Time Saving
        </h1>
        <p className="text-1xl my-10 secondary-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
          libero mollitia ducimus quo dolores dolorum similique nulla eaque
          facere deleniti et asperiores sapiente, ea fugit, labore quisquam eos
          molestias recusandae enim obcaecati? Quas earum eum suscipit aliquid
          ducimus eius fugiat!
        </p>
        <div className="btn-primary">Download the mobile app</div>
      </div>
    </div>
  );
};

export default MobileAppSection;
