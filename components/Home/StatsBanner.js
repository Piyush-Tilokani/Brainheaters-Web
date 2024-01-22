import React from "react";

const StatsBanner = () => {
  return (
    <div className="banner-container">
      <div className="banner">
        <div className="bannerText">
          <div className="bannerItem">
            <span className="bannerNumber">26k+</span>
            <span className="bannerDescription">Success Stories</span>
          </div>
          <div className="bannerItem">
            <span className="bannerNumber">150+</span>
            <span className="bannerDescription">Studyrooms</span>
          </div>
          <div className="bannerItem">
            <span className="bannerNumber">12k+</span>
            <span className="bannerDescription">Study Materials</span>
          </div>
          <div className="bannerItem">
            <span className="bannerNumber">300k+</span>
            <span className="bannerDescription">Trusted Students</span>
          </div>
          <div className="bannerItem">
            <span className="bannerNumber">550+</span>
            <span className="bannerDescription">Professors' Choice</span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .banner-container {
          margin-top: 9rem;
          margin-bottom: 0rem;
          width: 100%;
          /* Adjust the width and other styles as needed */
        }

        .banner {
          background: #6658d3;
          width: 100vw;
          height: 11.25rem;
          flex-shrink: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          padding-bottom: 1rem;
          width: 100%;
        }

        .bannerText {
          display: flex;
          gap: 8rem;
          /* Increased spacing between texts */
          font-family: "Gordita Bold";
          color: #fff;
          /* You can adjust the margins as needed */
          margin-left: 25rem;
          margin-right: 11.94rem;
        }

        .bannerItem {
          text-align: center;
          margin-right: 1rem;
          padding-top: 2.94rem;
          padding-bottom: 2.94rem;
        }

        .bannerNumber {
          font-size: 42px;
          font-weight: bold;
          line-height: normal;
          letter-spacing: -0.0525rem;
        }

        .bannerDescription {
          font-size: 1rem;
          display: block;
          line-height: 160%;
          letter-spacing: -0.0525rem;
        }
      `}</style>
    </div>
  );
};

export default StatsBanner;
