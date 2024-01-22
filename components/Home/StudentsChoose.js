import React from 'react';
import AppDropdown from "../Dropdown/AppDropdown";

const StudentsChoose = () => {
  const gridData = [
    {
      text: 'Analysis ek dum Sahi hoti hai ',
      color: '#46C2F3',
      subgridText: 'TRUST',
    },
    {
      text: 'Question banks me se hi sab aata hai',
      color: '#6F6FCB',
      subgridText: 'ACCURACY',
    },
    {
      text: 'Notes perfect hoti hai module wise',
      color: '#FFB648',
      subgridText: 'ORGANIZED',
    },
    {
      text: 'How to Pass lifesaver hai BH ka',
      color: '#5FBEBE',
      subgridText: 'LIFESAVER',
    },
    {
      text: 'Easy & Smart preparation hoti hai',
      color: '#C98C8C',
      subgridText: 'SIMPLICITY',
    },
  ];

  return (
    <div className="students-choose-container">
      <div className="left-section">
        <div className="verified-div">
          <img src="images/Verf.png" alt="Verified" className="verified-icon" />
          <p className="verified-text">
            Based on <span className="feedback-count">24,798</span> students feedback - Check Proof
          </p>
        </div>
        <div className="title-section">
          <img src="images/grad.png" alt="Graduation" className="grad-image" />
          <h1 className="title">
          <span className="students-text">Students choose</span>
            <span className="reasons-text">BH for these 5 reasons</span>
          </h1>
        </div>
        <p className="subtitle">
          We take your report card seriously and therefore try to understand students requirements deeply conducting regular feedback survey.
        </p>
      </div>
      <div className="buttons">
                <AppDropdown /> </div>
      <div className="right-section">
        <div className="grid-container">
          {gridData.map((item, index) => (
            <div key={index} className="grid-item">
              <div className="subgrid" style={{ backgroundColor: item.color }}>
                <p className="subgrid-text">{item.subgridText}</p>
              </div>
              <img src="/images/quote.svg" alt="Common" className="grid-image" />
              <p className="grid-text" style={{ color: item.color }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx >{`

        .buttons {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 1rem;
          margin-top: 12rem;
          margin-left: -49rem;
          padding-right:16rem;
        }
        .students-choose-container {
          display: flex;
          align-items: center;
          background-color: white; /* Set background color to white */
          padding-top: 5rem;
          width: 100%;
        }

        .verified-div {
          background-color: #f0f0f0;
          padding: 10px;
          display: flex;
          align-items: center;
          border-radius: 5px;
          margin-bottom: 2.8rem;
          width: 23.375rem;
          height: 3rem;
          flex-shrink: 0;
          margin-left: 3.1rem;
          
        }

        .verified-icon {
          width: 2.5rem;
          height: auto;
          margin-right: 0.2rem;
        }

        .verified-text {
          color: #363A3F;
          font-family: Gordita Medium;
          font-size: 0.80rem;
          font-style: normal;
          font-weight: 500;
          line-height: 160%;
          letter-spacing: -0.015rem;
        }

        .feedback-count {
          color: #6658D3;
          font-family: Gordita Medium;
          font-size: 0.80rem;
          font-style: normal;
          font-weight: 500;
          line-height: 160%;
          letter-spacing: -0.015rem;
        }

        .left-section {
          flex: 2;
          margin-left: 19rem;
          margin-bottom: 18rem;
        
        
        }
        .title-section {
          display: flex;
          align-items: center; /* Align items to the center of flex container */
          padding-left: 3rem;
          width: 40rem;
        }

        .grad-image {
          width: 2.62rem;
          height: auto;
          margin-right: 0.5rem; /* Adjust margin as needed */
          margin-top: -4.5rem;
          margin-right: 0.5rem;
          position: absolute;
        }

        .title {
          color: #363A3F;
          font-family: Gordita Bold;
          font-size: 3rem;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          letter-spacing: -0.02625rem;
          margin-bottom: 1rem;
        }

        .subtitle {
          font-size: 1rem;
          color: #888;
          color: #363A3F;
          font-family: Gordita Regular;
          font-size: 1rem;
          font-style: normal;
          font-weight: 400;
          line-height: 160%;
          letter-spacing: -0.02rem;
          padding-left: 6rem;
          
          width: 30rem;
          margin-left: -3rem;
        }

        .right-section {
          flex: 1;
          margin-right: 12rem;
        }

        .grid-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr); /* Change to 3 columns */
          gap: 20px; /* Increase the gap between grids */
          padding-bottom: 8rem;
        }

        .grid-item {
          background-color: #fff;
          padding: 20px;
          border-radius: 5px;
          position: relative;
          text-align: center;
          width: 15rem;
          height: 15.5rem;
          flex-shrink: 0;
          border-radius: 0.75rem;
          background: #FFF;
          box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.10);
        }

      
        .subgrid {
          background-color: rgba(0, 0, 0, 0.6);
          padding: 5px 10px;
          border-radius: 0.4rem;
          position: absolute;
          top: 20%;
          left: 30%;
          transform: translate(-50%, -50%);
          width: auto; 
          height: auto; 
          flex-shrink: 0;
        }

        .subgrid-text {
          color: #FFF;
          font-family: Gordita Bold;
          font-size: 0.75rem;
          font-style: normal;
        }
        .grid-image {
          width: auto;
          height: auto;
          object-fit: cover;
          position: absolute;
          margin-top: 7.2rem;
          padding-bottom: 1rem;
          margin-left: 0.6rem;
        }

        .grid-text {
          font-weight: bold;
          color: #ccc; 
          font-family: Gordita Medium;
          font-size: 1rem;
          font-style: normal;
          font-weight: 500;
          text-align: left;
          line-height: 160%;
          letter-spacing: -0.0225rem;
          margin-top: 9rem;
          margin-right: 2rem;
          margin-left: 0.6rem;
          white-space: normal; /* Allow text to wrap */
        } 
        .students-text {
          display: block; /* Display on a separate line */
          margin-left: 3rem;
        }

        .reasons-text {
          display: block; /* Display on a separate line */
        }
      `}</style>
    </div>
  );
};

export default StudentsChoose;
