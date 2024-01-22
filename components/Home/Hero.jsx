import React from "react";
import Image from "next/image";
import AppDropdown from "../Dropdown/AppDropdown";

const Hero = () => {
  return (
    <div className="container">
      <div className="stack">
        <div className="flex">
          <div className="wrap">
            <div className="textWrapper">
              <div className="heading">
                <h1 className="headingText">
                  <span className="headingWrap">
                    We make engineering studies easy, simple and smart{" "}
                    <img src="/images/smile.png" alt="Smiling face" className="smileIcon" />
                  </span>
                </h1>
              </div>
              <div className="text">
                <p className="textColor">
                  We're your one-stop solution for engineering students' academic needs.
                  <span className="studentCount">Don't just study hard, study smart. </span>
                </p>
              </div>
              <div className="buttons">
                <AppDropdown /> {/* Use the AppDropdown component */}
                <div className="loginButton">
                  <button className="loginButtonInner">
                    <img
                      src="/images/desktop_icon.png"
                      alt="Desktop Icon"
                      className="desktopIcon"
                    />
                    <span className="buttonText">Log on Desktop</span>
                  </button>
                </div>
              </div>
              <div className="bottomText">
              <div className="starIcon">
                    <div className="orangeBox">
                      <img
                        src="/images/star.png"
                        alt="Star Icon"
                        className="starImage"
                      />
                    </div>
                  </div>
                <div className="studentCountAndText">
                  <p className="textBelowButtons">
                    Over <span className="studentCount">3 Lacs</span> students have used Brainheaters for their engineering academics & <span className="studentCount">scored avg 7.5+</span>
                  </p>
                  <div className="arrowIcon">
            <img
              src="/images/ra.svg" /* Replace with the actual arrow icon source */
              alt="Arrow Icon"
              className="arrowImage"
            />
          </div>

                </div>
              </div>
            </div>
          </div>
          <div className="heroWrap">
            <div className="eclipse"></div>
            <div className="imageWrapper">
              <Image
                className="image"
                src="/images/hero.png"
                alt="Hero Image"
                width={621}
                height={520}
              />
            </div>
            <div className="shadowDiv"></div>
          </div>
        </div>
      </div>
    
    
      <style jsx >{`
      
        @font-face {
          font-family: "Gordita Bold";
          src: url("../fonts/gordita-bold.ttf") format("truetype");
          font-weight: bold;
          font-style: normal;
        }

        @font-face {
          font-family: "Gordita Medium";
          src: url("../fonts/gordita-medium.ttf") format("truetype");
          font-weight: medium;
          font-style: normal;
        }

        @font-face {
          font-family: "Gordita Regular";
          src: url("../fonts/gordita-regular.ttf") format("truetype");
          font-weight: normal;
          font-style: normal;
        }

        .container {
          max-width: 85rem;
          margin: 76px auto;
          padding: 0.1rem;
          position: relative;
        }

        body {
          background-color: #fff;
        }

        .stack {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-direction: column;
          top: 0;
          margin-left: 8rem;
          margin-right: 8rem;
          margin-top: 4.75rem;
        }

        // .starSvg {
        //   width: 1.5rem;
        //   height: 1.5rem;
        // }

        .flex {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 100%;
        }

        .imageWrapper {
          position: relative;
          width: 620px;
          height: 520px;
          border-radius: 35px;
          overflow: hidden;
        }

        .orangeBox {
          width: 4rem;
          height: 4rem;
          background-color: #FFCF71;
          border-radius: 0.95rem;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: -5rem;
        }

        .starImage {
          width: 1.5rem;
          height: 1.5rem;
        }

        .eclipse {
          position: absolute;
          bottom: -40px;
          right: -60px;
          width: 11.5rem;
          height: 11.5rem;
          background-color: transparent;
          border: 2px solid #FF9971;
          border-radius: 50%;
        }

        .wrap {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1.5rem;
          margin-top: -4.5rem;
        }
// This is the main text wrapper it can move the entire left section

        .textWrapper {
          flex: 1;
          margin-bottom: 4rem;
          margin-left: -0.8rem;
          
        }

        .headingWrap {
          display: inline-flex;
          font-size: 3.1rem;
          font-family: "Gordita Bold";
        }
        // can move the title text
        .heading {
          position: relative;
          top: 1.5px;
          margin-left: -5rem;
     
        }

        .headingText {
          font-size: 8rem;
          line-height: 1.1;
          margin-top: -60px;
          width: 543px;
          padding-bottom: 1rem;
          padding-left: -3rem;
          line-height: 1.5;
        }

        .text {
          color: #363A3F;
          width: 500px;
          line-height: normal;
          letter-spacing: -0.48px;
          margin-left: -5rem;
        }

        .textColor {
          margin: 0;
          line-height: 160%;
          color: #363A3F;
          font-family: "Gordita Regular";
        }

        .buttons {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 1rem;
          margin-top: 2rem;
          margin-left: -5rem;
        }

        .button {
          padding: 0.75rem 1.5rem;
          border: none;
          font-weight: normal;
          border-radius: 12px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        .appButton {
          background-color: #6658d3;
          color: #fff;
          padding-right: 32px;
          width: 331px;
          height: 60px;
        }

        .loginButton {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .loginButtonInner {
          background-color: #fff;
          border: 2px solid;
          border-radius: 12px;
          height: 56px;
          width: 180px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 1rem;
          white-space: nowrap;
          margin-right: 76px;
        }

        .desktopIcon {
          width: 25px;
          height: 20px;
          margin-right: 0.5rem;
        }

        .heroWrap {
          position: absolute;
          width: 621px;
          height: 520px;
          margin-left: 40.69rem;
        }

        .image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 35px;
        }

        .separator {
          width: 1px;
          height: 24px;
          background-color: #9a9aef;
          margin: 0 1rem;
        }

        .buttonText {
          margin-right: 1rem;
          font-size: 16px;
          line-height: normal;
          letter-spacing: -0.32px;
          font-family: "Gordita Regular";
        }

        .buttonIcon {
          width: 31px;
          height: 31px;
        }

        .bottomText {
          color: #363a3f;
          font-family: "Gordita Regular";
          font-size: 1rem;
          margin-bottom: -4.5rem;
          margin-left: rem;
          letter-spacing: -0.32px;
          width: 388px;
          margin-top: 62px;
        }

        .studentCountAndText {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          margin-left: -rem;
          margin-right: -4rem;
          margin-top: -3.5rem; /* Adjust this value as needed */
        }

        .studentCount {
          color: #595959;
          font-family: "Gordita Bold";
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 156%;
          letter-spacing: -0.32px;
        }

        .arrowIcon {
          width: 16px;
          height: 16px;
          margin-left: 20rem;
          position: absolute;
          bottom: 5.2rem;
          margin-right: 1rem;
        }

        .smileIcon {
          width: 48px;
          height: 48px;
          margin-left: 15rem;
          position: absolute;
          bottom: 1.7rem;
          right: 20rem;
        }
        .shadowDiv {
          position: absolute;
          width: 38.6875rem;
          height: 31.6875rem;
          flex-shrink: 0;
          background: #F4F7F8; /* Semi-transparent black color for shadow effect */
          border-radius: 2.1875rem;
          left: -15rem; /* Align to the extreme left */
          bottom: 4rem; /* Adjust the distance from the bottom as needed */
          z-index: -1; /* Place the shadow div behind other elements */
          transform: scaleX(1.05); /* Increase width slightly for a subtle underlap effect */
        }
        .arrowIcon {
          width: 16px;
          height: 16px;
          margin-left: 19.2rem; /* Adjust the margin as needed */
          display: inline-block;
          vertical-align: middle;
          margin-bottom: -5.35rem;
          position: absolute;
        }

        .arrowImage {
          width: 100%;
          height: 100%;
        }

      `}</style>
    </div>
  );
};

export default Hero;
