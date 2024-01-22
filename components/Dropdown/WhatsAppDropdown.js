import React, { useState } from 'react';

const WhatsAppDropdown = ({ show }) => {
  const universityOptions = [
    {
      text: 'MU Community',
      imageUrl: 'images/MU.png',
      number: '67k',
      branches: [
        { name: '2nd year - Computers', numbers: '3.1k' },
        { name: '3rd year - Computers', numbers: '1.1k' },
        { name: '4th year - Computers', numbers: '7.5k' },
        { name: '2nd year - IT', numbers: '4.3k'},
        { name: '3rd year - IT', numbers: '5.0k'},
        { name: '4th year - IT', numbers: '6.0k'},
        { name: '2nd year - EXTC', numbers: '3.1k' },
        { name: '3rd year - EXTC', numbers: '1.1k' },
        { name: '4th year - EXTC', numbers: '7.5k' },
        // ... add more branches here
      ],
    },
    {
      text: 'GTU Community',
      imageUrl: 'images/GTU.png',
      number: '50k',
      branches: [], // No branches for Uni2 in this example
    },
  ];

  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <div className={`dropdown ${show ? 'active' : ''}`}>
      {universityOptions.map((item, index) => (
        <div key={index} className="option">
          <div className="content">
            <img src={item.imageUrl} alt={item.text} className="icon" />
            <span className="text" onClick={() => toggleDropdown(index)}>
              {item.text}
            </span>
            <div className="gray-box">
              <p className="numbers">{item.number}</p>
            </div>
            <img src="/images/Arrow2.png" alt="Arrow" className="arrow-icon" />
          </div>
          {index < universityOptions.length - 1 && <div className="separator"></div>}
          {activeDropdown === index && (
            <div className="branch-dropdown">
              <div className="scrollable-container">
                {item.branches.map((branch, branchIndex) => (
                  <div key={branchIndex} className="branch-option">
                    <div className="branch-content">
                      <span className="branch-text">{branch.name}</span>
                      <div className="gray-box">
                        <p className="numbers">{branch.numbers}</p>
                      </div>
                      <img src="/images/Arrow2.png" alt="Arrow" className="arrow-icon" />
                    </div>
                    {branchIndex < item.branches.length - 1 && <div className="separator"></div>}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
      <style jsx>{`
        .dropdown {
          border-radius: 0.9375rem;
          box-shadow: 0px 4px 100px 0px rgba(0, 0, 0, 0.15);
          padding: 1rem;
          background-color: #fff;
          display: none;
          flex-direction: column;
          align-items: center;
          position: absolute;
          top: 4.5rem;
          right: 85px;
          z-index: 1;
          margin-top: -1rem;
          margin-right: 16rem;
          width: 17.9375rem;
          min-height: 7.5rem;
        }

        .dropdown.active {
          display: flex;
        }

        .option {
          justify-content: space-between;
          padding: 0.1rem;
          padding-left: 0.5rem;
          width: 100%;
         
        }

        .content {
          display: flex;
          align-items: center;
        }

        .text {
          color: #363A3F;
          font-family: Gordita Medium;
          font-size: 0.75rem;
          line-height: 160%; /* 1.2rem */
          letter-spacing: -0.015rem;
          margin-right: 0.5rem;
          cursor: pointer;
        }

        .gray-box {
          border-radius: 0.25rem;
          background: #F4F7F8;
          margin-right: 0.5rem;
          padding-left: 0.45rem;
          padding-top: 0.15rem;
          width: 2.25rem;
          height: 1.125rem;
          flex-shrink: 0;
        }

        .numbers {
        color: #8E8E8E;
        font-family: Gordita Medium;
        font-size: 0.70rem;
        marging-left: -1.5rem;
        }

        .icon {
          width: 1.5625rem;
          height: 1.5625rem;
          flex-shrink: 0;
          margin-right: 0.8rem;
        }

        .arrow-icon {
          width: auto;
          height: auto;
          margin-left: 2.5rem;
        }

        .separator {
          width: 100%;
          height: 1px;
          background: #EDEDED;
          margin: 0.5rem 0;
        }

        .branch-dropdown {
          background-color: #fff;
          border-radius: 0.25rem;
          padding: 0.25rem;
          margin-top: 0.5rem;
          width: 100%;
        }

        .branch-option {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0.25rem;
          cursor: pointer;
        }

        .branch-content {
          display: flex;
          align-items: center;
          width: 100%;
        }

        .branch-text {
          color: #363A3F;
          font-family: Gordita Medium;
          font-size: 0.75rem;
          line-height: 160%; /* 1.2rem */
          letter-spacing: -0.015rem;
          white-space: nowrap; /* Prevent text from wrapping */
          // overflow: hidden; /* Hide overflow */
          text-overflow: ellipsis; /* Show ellipsis for overflowed text */
          flex-grow: 1; /* Allow text to grow as much as possible */
          
        }

        .branch-content .gray-box {
          border-radius: 0.25rem;
          background: #F4F7F8;
          margin-right: 2.5rem;
          padding-left: -4.5rem;
          padding-top: 0.15rem;
          width: 2.25rem;
          height: 1.125rem;
          flex-shrink: 0;
          margin-left: 0.5rem;
        }

        .branch-content .arrow-icon {
          width: auto;
          height: auto;
          margin-left: .5rem;

        }
        
      `}</style>
    </div>
  );
};

export default WhatsAppDropdown;
