import React, { useState } from "react";

const AppDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="appDropdown">
      <button className="appButton" onClick={toggleDropdown}>
        <span className="buttonText">Download the App</span>
        <div className="icons">
          <img
            src="/images/playstore.png"
            alt="Android Icon"
            className="buttonIcon"
          />
          <span className="separator"></span>
          <img
            src="/images/appstoreicon.png"
            alt="Apple Icon"
            className="buttonIcon"
          />
        </div>
      </button>

      {dropdownOpen && (
        <div className="dropdownContent">
          <a href="#" className="dropdownLink">
            <img
              src="/images/playstore.png"
              alt="Android Icon"
              className="dropdownIcon"
            />
            Download for Android
          </a>
          <span className="separatorHorizontal"></span>
          <a href="#" className="dropdownLink">
            <img
              src="/images/appstoreicon.png"
              alt="Apple Icon"
              className="dropdownIcon"
            />
            Download for iOS
          </a>
          <div className="coloredLine">
            <div className="colorSegment red"></div>
            <div className="colorSegment green"></div>
            <div className="colorSegment blue"></div>
          </div>
        </div>
      )}

      <style jsx>{`
        .appDropdown {
          position: relative;
          display: inline-block;
        }

        .appButton {
          background-color: #6658d3;
          color: #fff;
          padding: 0.75rem 1.5rem;
          border: none;
          font-weight: normal;
          border-radius: 12px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          margin-left: 20px;
          margin-top: 30px;
        }

        .buttonText {
          margin-right: 1rem;
          font-size: 16px;
          line-height: normal;
          font-family: "Gordita-Medium";
          letter-spacing: -0.32px;
        }

        .icons {
          display: flex;
          align-items: center;
        }

        .buttonIcon {
          width: 31px;
          height: 31px;
          margin-left: 1rem;
        }

        .separator {
          width: 1px;
          height: 24px;
          background-color: #9a9aef;
          margin: 0 1rem;
        }
        .separatorHorizontal {
          width: 100%;
          height: 1px;
          background-color: #ededed;
        }
        .dropdownContent {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1rem;
          position: absolute;
          border-radius: 0.9375rem;
          background: #fff;
          box-shadow: 0px 4px 100px 0px rgba(0, 0, 0, 0.15);
          padding: 1rem;
          top: 100%;
          padding-top: 1.5rem;
          padding-bottom: 1rem;
          width: 17.9375rem;
          height: 8.6875rem;
          margin-left: 1.9rem;
          margin-top: 0.5rem;
          left: 0;
          z-index: 1;
          font-family: "Gordita-Medium";
        }

        .dropdownLink {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          color: #363a3f;
        }

        .dropdownIcon {
          width: 24px;
          height: 24px;
          margin-right: 1.5rem;
        }

        .coloredLine {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 0.25rem;
          background-color: transparent;
          position: absolute;
          bottom: 0;
          margin-bottom: 0.1rem;
          margin-left: -1rem;
          margin-right: -1rem;
        }

        .colorSegment {
          flex-grow: 1;
          height: 100%;
        }

        .red {
          background-color: #ff6464;
        }

        .green {
          background-color: #46c2f3;
        }

        .blue {
          background-color: #6658d3;
        }
      `}</style>
    </div>
  );
};

export default AppDropdown;
