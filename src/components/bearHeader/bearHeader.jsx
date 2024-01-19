import React from "react";
import { Container } from "react-bootstrap";
import "./bearHeader.scss";
import LogoImage from "../../image/logo.png";

export default function BearHeader() {
  return (
    <div className="bear-header">
      <Container className="header-container">
        <img src={LogoImage} alt={"logo"} className="logo-image" />
        <div className="category-wrapper">
          <p className="category">Home</p>
          <p className="category">Projects</p>
        </div>
      </Container>
    </div>
  );
}
