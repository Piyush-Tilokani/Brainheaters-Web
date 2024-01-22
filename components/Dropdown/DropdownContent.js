import React, { useState, useEffect } from "react";
import Link from "next/link";

const studyMaterialsItems = [
  { title: "Bh.Papers", description: "Previous Question Papers with analyzed reports", icon: "images/papers.png", section: "BH.STUDYROOM" },
  { title: "Bh.Questionbanks", description: "UT, VIVA & Final Exam Qbanks module wise with priority", icon: "images/QBs.png", section: "BH.STUDYROOM" },
  { title: "Bh.Notes", description: "Notes in Q/A format module wise & prioritized", icon: "images/notes.png", section: "BH.STUDYROOM" , link: "/StudyMaterials" },
  { title: "Bh.VIVAs", description: "VIVA and Oral exams Q/A format notes (limited subjects)", icon: "images/Vivas.png", section: "BH.STUDYROOM" },
  { title: "Bh.How to Pass", description: "Sorted IMPs for Just Passing, Avg or Top scores", icon: "images/HTP.png", section: "BH.STUDYROOM" },
  { title: "Reference & Text Books", description: "University recommended reference & textbooks of all subjects", icon: "images/RTB.png", section: "BH.LIBRARY" },
  { title: "Bh.Flashcards", description: "1000+ Study Cards with question on one side and the  answer on the other side.", icon: "images/flash.png", section: "BH.LIBRARY" },
  // Add more study materials items with sections
  // ...
];

const DropdownContent = ({ items }) => {
  const sections = Array.from(new Set(items.map(item => item.section)));
  const leftSections = sections.slice(0, Math.ceil(sections.length / 2));
  const rightSections = sections.slice(Math.ceil(sections.length / 2));

  const [hoveredItem, setHoveredItem] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    return () => {
      setIsVisible(false);
    };
  }, []);

  return (
    <div className={`dropdown-content ${isVisible ? 'visible' : ''}`}>
      <div className="sections">
        <div className="left-section">
          {leftSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="section">
              {sectionIndex !== 0 && <hr className="section-separator" />}
              <h3 className={section === "Section 1" ? "section-title-1" : "section-title-2"}>{section}</h3>
              <hr className="title-separator" />
              <div className="items">
                {items.filter(item => item.section === section).map((item, index) => (
                  <div
                    key={index}
                    className={`item ${item.style}`}
                    onMouseEnter={() => setHoveredItem(item)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div className="item-box">
                      <div className="item-icon-box">
                        <div className="small-gray-box">
                          <img src={item.icon} alt={item.title} className="item-icon" />
                        </div>
                      </div>
                      <div className="item-details">
                        <Link href={item.link || "#"}>
                          <a className="item-title">
                            {item.title}
                            {item.title === "Bh.Flashcards" && (
                              <span className="flash-cards-indicator">NEW</span>
                            )}
                          </a>
                        </Link>
                        <div className="item-description">{item.description}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="separator"></div>
        <div className="right-section">
          {rightSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="section">
              {sectionIndex !== 0 && <hr className="section-separator" />}
              <h3 className={section === "Section 1" ? "section-title-1" : "section-title-2"}>{section}</h3>
              <hr className="title-separator" />
              <div className="items">
                {items.filter(item => item.section === section).map((item, index) => (
                  <div
                    key={index}
                    className={`item ${item.style}`}
                    onMouseEnter={() => setHoveredItem(item)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div className="item-box">
                      <div className="item-icon-box">
                        <div className="small-gray-box">
                          <img src={item.icon} alt={item.title} className="item-icon" />
                        </div>
                      </div>
                      <div className="item-details">
                        <Link href={item.link || "#"}>
                          <a className="item-title">
                            {item.title}
                            {item.title === "Bh.Flashcards" && (
                              <span className="flash-cards-indicator">NEW</span>
                            )}
                          </a>
                        </Link>
                        <div className="item-description">{item.description}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    
      <style jsx>{`
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
      .item-icon-box {
        position: relative;
        display: inline-block;
        margin-right: 1rem;
      }

      .small-gray-box {
        position: relative;
        width: 2.62rem;
        height: 2.62rem;
        border-radius: 0.75rem;
        background: #F4F7F8;
      }

      .item-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 1.25rem;
        height: 1.25rem;
      }

    z
      .item-details {
        flex: 1;
      }

      .item-title {
        color: #363A3F;
        font-family: "Gordita Medium";
        font-size: 0.875rem;
        font-style: normal;
        line-height: 160%;
        letter-spacing: -0.0175rem;
      }

      .item-description {
        color: #363A3F;
        font-family: "Gordita bold";
        font-size: 0.75rem;
        font-style: normal;
        line-height: 160%;
        letter-spacing: -0.0175rem;
        color: #777;
        white-space: normal;
        // word-wrap: break-word;
        text-overflow: ellipsis;
        // overflow: hidden;
        // width: 100%;
      }
        .dropdown-content {   // this is the main dropdown content this can change the position of the dropdown
          position: absolute;
          margin-top: 2rem;
          margin-left: -8.8rem;
          background-color: #fff;
          border: 1px solid #ccc;
          padding: 1.5rem;
          box-shadow: 0px 4px 100px 0px rgba(0, 0, 0, 0.15);
          width: 52rem;
          z-index: 100;
          border-radius: 0.9375rem;
        }

        .sections {
          display: flex;
        }

        .left-section,
        .right-section {
          flex: 1;
        }

        .section {
          margin-top: 1.25rem;
          margin-left : 1.25rem;
          
        }

    z

        .section-title-1 {
          font-size: 0.2rem;
          color: #0066cc;
        }

        .section-title-2 {
          color: #6658D3;
          font-family: Gordita Bold;
          font-size: 0.875rem;
          font-style: normal;
          line-height: 160%; /* 1.4rem */
          letter-spacing: -0.0175rem;
          margin-left: 0.2rem;
          }

        .separator {
          
          background-color:  #EDEDED;
          margin-right: 1.5rem;
          margin-left: 1.5rem;
          margin-top: 1.5rem;
          margin-bottom: 0;
           margin: 1.5rem 0;
          width: 0.0625rem;
          height: 27.875rem;
        }
// this is the main title seperator
        .title-separator {
          border: 1px solid #EDEDED;; 
          margin: 1rem -1rem 0;
        }
        

        .items {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }

        .item {
          width: 100%;
          margin-right: 1.25rem;
          margin-bottom: 1rem;
          margin-top : 1.5rem
        }

        .item:hover {
          background-color: #f0f8ff;
        }

        .item-box {
          display: flex;
          align-items: center;
        }

        .item-icon {
          margin-right: 1rem;
        }

        .item-icon img {
          width: 2rem;
          height: 2rem;
        }

        .item-details {
          flex: 1;
        }

        .item-title {
          color: #363A3F;
          font-family: Gordita Medium;
          font-size: 0.875rem;
          font-style: normal;
          line-height: 160%; /* 1.4rem */
          letter-spacing: -0.0175rem;
        }

        .item-description {
          color: #363A3F;
          font-family: "Gordita Medium";
          font-size: 0.75rem;
          font-style: normal;
          line-height: 160%;
          letter-spacing: -0.0175rem;
          color: #777;
          white-space: normal;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 100%;
        }
        // New styles for department items
        .department-items {
          display: flex;
          flex-direction: column;
          margin-top: 3rem;
          margin-left: 1.25rem;
          margin-bottom: 1.5rem;
        }

        .department-item {
          width: 100%;
          margin-bottom: 1rem;
        }

        .department-item:hover {
          background-color: #f0f8ff;
        }

        .department-item-box {
          display: flex;
          align-items: center;
        }

        .department-item-icon-box {
          position: relative;
          display: inline-block;
          margin-right: 1rem;
        }

        .department-item-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 2rem;
          height: 2rem;
        }

        .department-item-details {
          flex: 1;
        }

        .department-item-title {
          color: #363A3F;
          font-family: Gordita Medium;
          font-size: 10.875rem;
          font-style: normal;
          line-height: 160%; /* 1.4rem */
          letter-spacing: -0.0175rem;
        }

        .department-item-description {
          color: #363A3F;
          font-family: "Gordita Medium";
          font-size: 0.75rem;
          font-style: normal;
          line-height: 160%;
          letter-spacing: -0.0175rem;
          color: #777;
          white-space: normal;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 100%;
          
        }

        .flash-cards-indicator {
          background: #FFCF71;
          border-radius: 0.4375rem;
          padding: 0.1rem 0.2rem;
          margin-left: 0.25rem;
          width: 3rem;
          height: 1.25rem;
          flex-shrink: 0;
        }
        
        .flash-cards-indicator-text {
          color: #273D55;
          font-family: Gordita Bold;
          font-size: 0.625rem;
          line-height: 154%; /* 0.9625rem */
          letter-spacing: -0.0125rem;
         }
         .dropdown-content {
          /* ... existing styles ... */
          opacity: 0; /* Initially set opacity to 0 */
          transition: opacity 0.5s ease-in-out; /* Add a transition effect */
        }
      
        .dropdown-content.visible {
          opacity: 1; /* When visible, set opacity to 1 */
        }
      `}</style>
    </div>
  );
};

export { DropdownContent, studyMaterialsItems };
