import React, { useState } from 'react';
import {
  MumbaiUniversityContent,
  GujaratTechUniversityContent,
  MoreUniversitiesContent,
} from './UniversityTabsContent';

const DepartmentsSection = () => {
  const tabsData = [
    {
      label: 'Mumbai University',
      icon: 'images/MU.png',
      content: <MumbaiUniversityContent />,
    },
    {
      label: 'Gujarat Tech. University',
      icon: 'images/GTU.png',
      content: <GujaratTechUniversityContent />,
    },
    {
      label: 'More Universities',
      content: <MoreUniversitiesContent />,
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
    setScrollPosition(index * 100);
  };

  return (
    <div className="departments-section-container">
      <h1 className="title">
        We cover 16+ Departments & 700+ Subjects{' '}
        <img src="images/cry.png" alt="Subjects Icon" className="subjects-icon" />
      </h1>

      <div className="tabs-container">
        <div className="tabs">
          {tabsData.map((tab, index) => (
            <div
              key={index}
              className={`tab ${activeTab === index ? 'active' : ''}`}
              onClick={() => handleTabClick(index)}
            >
              <span className="tab-icon">
                {tab.icon && <img src={tab.icon} alt={`Tab Icon ${index}`} />}
              </span>
              <span className="tab-label">{tab.label}</span>
            </div>
          ))}
        </div>
        <div className="tab-slider-container">
          <div
            className="tab-slider"
            style={{ transform: `translateX(${scrollPosition}%)` }}
          />
        </div>
      </div>

      <div className="tab-content">
        {tabsData.map((tab, index) => (
          <div key={index} className={`content ${activeTab === index ? 'active' : ''}`}>
            {tab.content}
          </div>
        ))}
      </div>

      <style jsx global>{`
        
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
        
        .subjects-icon {
          width: auto; /* Adjust the width as needed */
          height: 3.7rem; /* Maintain aspect ratio */
          margin-left: 54rem;
          margin-top: -3.6rem;
          position: absolute;
        }

        /* Set the background color of the entire page to gray */
        // body {
        //   background-color: #fff; /* Gray background color */
        //   margin: 0; /* Reset default margin */
        // }
        .departments-section-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 90px 0 ;
          background: #F4F7F8;
        }

        .title {
          font-family: "Gordita Bold";
          color: #363A3F;
          font-size: 2.625rem;
          line-height: normal;
          letter-spacing: -0.0525rem;
          margin-bottom: 4.37rem; /* Adjust the margin to move the title above */
        }

        .tabs {
          display: flex;
          position: relative;
          overflow: hidden;
          width: 48.75rem;
          margin-bottom: 1rem;
        }

        .tab {
          display: flex;
          align-items: center;
          padding: 10px 25px;
          cursor: pointer;
          font-size: 18px;
          border: none;
          background-color: transparent;
        }

        .tab.active {
          font-weight: bold;
          
        }

        .tab-label {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          flex-grow: 1;
          color: #333;
          font-family: "Gordita bold";
        }

        .tab-icon {
          display: inline-block;
          width: 1.875rem;
          height: 2.125rem;
          flex-shrink: 0;
          margin-right: 8px;
        }
        .tabs-container {
          position: relative;
          width: 48.75rem;
          margin-bottom: 1rem;
        }

        .tab-slider-container {
          position: relative;
          width: 100%;
          height: 0.312rem;
          background: #fff; /* white background color for tabscroll */
          border-radius: 0.75rem;
          overflow: hidden;
        }

        .tab-slider {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 33.33%;
          height: 100%;
          background: #6658D3; /* Original tab slider color */
          transition: transform 0.3s;
        }
        .tab-content {
          margin-top: 20px;
        }

        .content {
          display: none;
        }

        .content.active {
          display: block;
        }
        .department-icon {
          width: 2.5rem;
          height: auto;
          margin-left: 1rem;
        }

      `}</style>
    </div>
  );
};

export default DepartmentsSection;
