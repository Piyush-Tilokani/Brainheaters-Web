import React from 'react';

const InstagramDropdown = ({ show }) => {
  const universityOptions = [
    { text: '@brainheaters', imageUrl: 'images/MU.png', number: '67k' },
    { text: '@gtu_brainheaters', imageUrl: 'images/GTU.png', number: '50k' },
    { text: '@brainheaters_firstyear', imageUrl: 'images/F.Es.svg', number: '30k' },
  ];

  return (
    <div className={`dropdown ${show ? 'active' : ''}`}>
      {universityOptions.map((item, index) => (
        <div key={index} className="option">
          <div className="content">
            <div className="text-container">
              <img src={item.imageUrl} alt={item.text} className="icon" />
              <span className="text">{item.text}</span>
            </div>
            <div className="numbers-box">
              <div className="gray-box">
                <p className="numbers">{item.number}</p>
              </div>
              <img src="images/Arrow2.png" alt="Arrow" className="arrow-icon" />
            </div>
          </div>
          {index < universityOptions.length - 1 && <div className="separator"></div>}
        </div>
      ))}
      <style jsx>{`
        .dropdown {
          border-radius: 0.9375rem;
          background: #FFF;
          box-shadow: 0px 4px 100px 0px rgba(0, 0, 0, 0.15);
          padding: 1rem;
          background-color: #fff; /* Changed background color to gray */
          display: none; /* Hide by default */
          flex-direction: column;
          align-items: center;
          position: absolute;
          top: 4.5rem; /* Adjust this value as needed */
          right: -2rem; /* Adjust this value as needed */
          z-index: 1;
          margin-top: -1rem;
          margin-right: 16rem;
          width: 17.9375rem;
          height: 11.5625rem;
        }

        .dropdown.active {
          display: flex; /* Show when active */
        }

        .option {
          justify-content: space-between;
          padding-top: 0.5rem;
          padding-bottom: -2.95rem;
          padding-left: 0.5rem;
          width: 100%;
        }

        .content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .text-container {
          display: flex;
          align-items: center;
        }

        .text {
          margin-right: 0.5rem;
          color: #363A3F;
          font-family: Gordita Medium;
          font-size: 0.80em;
          line-height: 160%;
          letter-spacing: -0.015rem;
        }

        .numbers-box {
          display: flex;
          align-items: center;
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
          margin: 0;
          color: gray;
          font-size: 0.75rem;
        }

        .icon {
          width: auto;
          height: 1rem;
          margin-right: 0.9rem;
        }

        .arrow-icon {
          width: auto;
          height: auto;
        }
        .separator {
          width: 100%;
          height: 1px;
          background-color: #ccc;
          margin: 0.5rem 0;
        }
      `}</style>
    </div>
  );
};

export default InstagramDropdown;
