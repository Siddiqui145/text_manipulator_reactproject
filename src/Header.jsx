import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div>
      <div className='header'>
        <span className='title'></span>
      </div>
      <h2> Welcome to Text Manipulator </h2>
      <Navbar />
    </div>
  );
};

export default Header;