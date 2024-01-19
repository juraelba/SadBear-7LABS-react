import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./header.scss";
import LogoImage from "../../image/logo.png";
import HamburgerIcon from "../../image/hamburger.svg";

export default function Header({ handleNavClick }) {
  const [showSidebar, setShowSidebar] = useState(false);

  const showSidebarMenu = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="header">
      <Container className="header-container">
        <img src={LogoImage} alt={"logo"} className="logo-image" />
        <div className="category-wrapper">
          <div className="category-menu">
            <p onClick={() => handleNavClick(0)} className="category">
              Home
            </p>
            <p onClick={() => handleNavClick(1)} className="category">
              Projects
            </p>
            <p onClick={() => handleNavClick(2)} className="category">
              Road Map
            </p>
            <p onClick={() => handleNavClick(3)} className="category">
              Contact
            </p>
          </div>
          {/* <button className='road-map'>Road Map</button> */}
          <img
            src={HamburgerIcon}
            alt={"hamburger-icon"}
            className="hamburger"
            onClick={() => showSidebarMenu()}
          />
        </div>
      </Container>
      {showSidebar && (
        <div className="side-nav">
          <p className="close" onClick={() => showSidebarMenu()}>
            &times;
          </p>
          <p onClick={() => handleNavClick(0)} className="side-category">Home</p>
          <p onClick={() => handleNavClick(1)} className="side-category">Projects</p>
          <p onClick={() => handleNavClick(2)} className="side-category">Road Map</p>
          <p onClick={() => handleNavClick(3)} className="side-category">Contact</p>
        </div>
      )}
    </div>
  );
}
