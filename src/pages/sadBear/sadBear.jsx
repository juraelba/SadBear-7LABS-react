import React, { useEffect } from "react";
import "./sadBear.scss";
import BearHeader from "../../components/bearHeader/bearHeader";
import LongArrow from "../../image/long-arrow.svg";
import ShortArrow from "../../image/short-arrow.svg";
import ConnectBear from "../../image/bear7.png";
import Twitter from "../../image/twitter.png";
import Discord from "../../image/discord.png";
import SecondCloud from "../../image/bottom_rain.png";

export default function SadBear() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="sad-bear">
      <BearHeader />
      <div className="main-section">
        <div className="main-title">
          <p className="title">SAD BEAR</p>
          <p className="description">Shorting Solana since $3.</p>
          <p className="content">
            Lorem ipsum dolor sit amet, consectetuer dipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
          <button className="connect-button">CONNECT WALLET TO BUY</button>
          <p className="counter-placeholder">0/10000 Sad Bears sold</p>
          <img src={LongArrow} alt={"long-arrow"} className="title-arrow" />
        </div>
        <div className="bear-image-section">
          <p className="road-map-title">ROAD MAP</p>
        </div>
        <div className="second-cloud-wrapper position-relative">
          <img
            src={SecondCloud}
            alt="RAIN"
            className="second-cloud position-absolute w-100"
          />
          <div className="road-map-content-wrapper">
            <p className="road-map-mobile-title">ROAD MAP</p>
            <p className="road-map-content">
              An owner of a Sad Bear will receive many future benefits. Our Tnx
              project will give free generative NFTs to holders of Sad Bear
              NFTs. Upcoming versions of the Sad Bears, such as a 3D version,
              will be provided either for free or for a discount to Sad Bear
              holders. In the future, we hope to turn the community into a DAO,
              in which a person's voting power is determined by the number of
              7Labs NFTs within that person's wallet.
            </p>
            <img src={LongArrow} alt={"long-arrow"} className="roadmap-arrow" />
          </div>
        </div>
      </div>

      <div className="connect-section">
        <div className="midline"></div>
        <img src={ShortArrow} alt={"short-arrow"} className="short-arrow" />
        <img src={ConnectBear} alt={"connect-bear"} className="connect-bear" />
        <div className="connect-link">
          <p className="connect-link-title">CONNECT</p>
          <div className="connect-group">
            <a href='https://discord.gg/WmUGgxbS'><img src={Discord} className="link-icon" alt={"discord"} /></a>
            <a href='https://twitter.com/solhanabears'><img src={Twitter} className="link-icon" alt={"twitter"} /></a>
          </div>
        </div>
      </div>

      <p className="rarities-mobile-title">RARITIES</p>

      <div className="rarities-section">
        <div className="midline"></div>
        <p className="rarities-title">RARITIES</p>
      </div>

      <div className="bottom-background"></div>
    </div>
  );
}
