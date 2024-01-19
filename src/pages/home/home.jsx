import React, { useRef } from "react";
import Header from "../../components/header/header";
import "./home.scss";
import LimitIcon from "../../image/limit-icon.svg";
import ButterflyIcon from "../../image/butterfly-icon.svg";
import Ox from "../../image/ox.png";
import Jack from "../../image/jack.png";
import Ghost from "../../image/ghost.png";
import Cris from "../../image/cris.png";
import Twitter from "../../image/twitter.png";
import Discord from "../../image/discord.png";
import SingleBear from "../../image/single-bear.png";
import SadBears from "../../image/sad-bears.png";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function Homepage() {
  const history = useHistory();

  const scrTargetArr = useRef([])

  const goToSadBear = () => {
    history.push("/sadBear");
  };

  const handleNavClick = (id) => {
    let e = scrTargetArr.current[id];
    e.scrollIntoView({
      block: "start",
      behavior: "smooth",
      inline: "start",
    });
  };

  return (
    <div className="homepage">
      <Header handleNavClick={handleNavClick} />

      <div ref={el => scrTargetArr.current[0] = el} className="title-section">
        <Container>
          <p className="title">7LABS</p>
          <p className="description">
            7 PROJECTS-7 INITAL DROPS-7 OPORTUNITIES TO COLLECT
          </p>
        </Container>
      </div>

      <div ref={el => scrTargetArr.current[1] = el} className="sad-bears-section">
        <Container>
          <p className="title">SAD BEARS</p>
          <p className="description">10000 BEARS DROPPING SOON</p>
          <button className="collect-button" onClick={() => goToSadBear()}>
            Collect
          </button>
          <div className="sad-bears-wrapper">
            <img
              src={SingleBear}
              alt={"single-bear"}
              className="mw-100 single-bear"
              onClick={() => goToSadBear()}
            />
            <img
              src={SadBears}
              alt={"sad-bears"}
              className="mw-100 sad-bears"
              onClick={() => goToSadBear()}
            />
            <div className="join-link">
              <div className="join-title">
                <img src={LimitIcon} alt={"limit-icon"} />
                <p className="join-title-content">Join the club</p>
              </div>
              <p className="join-description">SOLANA BEARS is a</p>
              <p className="join-description">parody NFT colection</p>
              <p className="join-description margin-b-45">
                waiting to find its home
              </p>
              <div className="join-title">
                <img src={ButterflyIcon} alt={"butterfly-icon"} />
                <p className="join-title-content">10 levels of rarity</p>
              </div>
              <p className="join-description">BLURB ABOUT RARITY</p>
              <p className="join-description">BLURB ABOUT RARITY</p>
              <p className="join-description">BLURB ABOUT RARITY</p>
            </div>
          </div>
        </Container>
      </div>

      <div className="bulls-section">
        <Container>
          <p className="title">BULLS</p>
          <p className="description">IN RPOGRESS</p>
          <div className="image-container">
            <p className="image-title">SAD BEAR’S SISTER PROJECT</p>
            <p className="image-description">A collection of 10000 3D bulls</p>
            <img src={Ox} alt={"ox"} className="mw-100" />
          </div>
        </Container>
      </div>

      <div className="tnx-section">
        <Container>
          <p className="title">TNX</p>
          <p className="description">
            Thanking 7Labs community with free generative NFT drops. Tnx is a
            holiday themed NFT project.
          </p>
          <div>
            <Row>
              <Col md={6} lg={4}>
                <div className="overflow-hidden image-content">
                  <img
                    src={Jack}
                    className="mw-100 image-filter"
                    alt={"jack"}
                  />
                  <p className="image-title">JACK-0’-LANTERNS</p>
                </div>
              </Col>
              <Col md={6} lg={4}>
                <div className="overflow-hidden image-content">
                  <img
                    src={Ghost}
                    className="mw-100 image-filter"
                    alt={"ghost"}
                  />
                  <p className="image-title">GHOSTS (COMMING SOON)</p>
                </div>
              </Col>
              <Col md={6} lg={4}>
                <div className="overflow-hidden image-content">
                  <img
                    src={Cris}
                    className="mw-100 image-filter"
                    alt={"cris"}
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <div ref={el => scrTargetArr.current[2] = el} className="road-map-section">
        <Container>
          <p className="title">ROAD MAP</p>
          <p className="description">
            7Labs intends to release seven projects. Holders of NFTs from early
            projects will receive privileges for purchases of NFTs from later
            projects. One of the seven projects, Tnx, is dedicated to free NFT
            giveaways to holders of 7Labs NFTs. The long term plan is to turn
            the 7Labs community into a DAO, in which a person's voting power is
            determined by the number of 7Labs NFTs within that person's wallet.
          </p>
        </Container>
      </div>

      <div ref={el => scrTargetArr.current[3] = el} className="connect-section">
        <Container>
          <p className="title">CONNECT</p>
          <a href='https://discord.gg/WmUGgxbS'><img src={Twitter} className="p-5" alt={"twitter"} /></a>
          <a href='https://twitter.com/7LabsNFT'><img src={Discord} className="p-5" alt={"discord"} /></a>
        </Container>
      </div>
    </div>
  );
}
