import React from "react";
import DarkMode from "../Dark Mode/DarkMode";

const Header = () => {
  return (
    <div className="header">
      <img src="" alt="" className="logo" />
      <h1>
        <img src="images/squatify_logo.png" height="75px" width="75px" alt="Squatify-Logo" />{" "}
        SQUATIFY
      </h1>
      <h3>The only squat tracker you need.</h3>
      <DarkMode />
    </div>
  );
};

export default Header;
