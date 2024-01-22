import React from 'react';

const MumbaiUniversityContent = () => {
  const subjects = [
    { name: 'Computers', students: 1200, numSubjects: 10, color: '#D08ED0' },
    { name: 'Information Tech.', students: 950, numSubjects: 8, color: '#6F6FCB' },
    { name: 'EXTC', students: 800, numSubjects: 6, color: '#539692' },
    { name: 'Mechanical', students: 700, numSubjects: 5, color: '#FF9971' },
    { name: 'Civil', students: 600, numSubjects: 4, color: '#5FBEBE' },
    { name: 'Electrical', students: 500, numSubjects: 4, color: '#7CC9E8' },
    { name: 'Electronics', students: 400, numSubjects: 3, color: '#C98C8C' },
    { name: 'Automobile', students: 300, numSubjects: 2, color: '#9BA48B' },
    // Add more subjects with data here
  ];
  return (
    <div className="grid-tabs">
      <div className="grid-container">
        {subjects.map((subject, index) => (
          <div key={index} className={`grid-item ${subject.name.toLowerCase().replace(/\s+/g, '-')}`} style={{ borderColor: subject.color }}>
            <div className="subject" style={{ color: subject.color }}>{subject.name}</div>
            <div className="info">
              <div className="info-item">
                {subject.students} Students | {subject.numSubjects} Subjects
              </div>
            </div>
          </div>
        ))}
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
        .grid-tabs {
          display: flex;
          justify-content: center;
          padding: 1rem;
        }

        .grid-container {
          display: flex;
          flex-wrap: wrap;
          max-width: 70%;
          margin: 0 -10px;
        }

        .grid-item {
          flex: 0 0 calc(25% - 20px); /* Four items in each row */
          padding: 15px;
          margin: 10px 10px 30px;
          border: 2px solid transparent;
          border-radius: 10px;
          text-align: left;
          font-size: 1rem;
          font-family: "Gordita regular";
          cursor: pointer;
          transition: border-color 0.3s;
          background-color: white;
          // box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.15);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: border-color 0.3s, background-color 0.3s; /* Add background-color transition */
        }

        .grid-item:hover {
          border-color: inherit; /* Use the same border color as non-hover state */
          color: #333; /* Text color on hover */
          background-color: #f4f4f4; /* Background color on hover */
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Box shadow on hover */
        }
        .subject {
          font-weight: bold;
          margin-bottom: 8px;
        }

        .info {
          color: #666;
        }

        .info-item {
          font-size: 12px;
        }
        .computers:hover {
          border-color: inherit;
          color: #333;
          background-color: rgba(208, 142, 208, 0.1); /* Lighter tone with reduced opacity */
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        }

        .information-tech:hover {
          border-color: inherit;
          color: #333;
          background-color: rgba(111, 111, 203, 0.1); /* Lighter tone with reduced opacity */
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        }

        .extc:hover {
          border-color: inherit;
          color: #333;
          background-color: rgba(83, 150, 146, 0.1); /* Lighter tone with reduced opacity */
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        }

        .mechanical:hover {
          border-color: inherit;
          color: #333;
          background-color: rgba(255, 153, 113, 0.1); /* Lighter tone with reduced opacity */
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        }

        .civil:hover {
          border-color: inherit;
          color: #333;
          background-color: rgba(95, 190, 190, 0.1); /* Lighter tone with reduced opacity */
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        }

        .electrical:hover {
          border-color: inherit;
          color: #333;
          background-color: rgba(124, 201, 232, 0.1); /* Lighter tone with reduced opacity */
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        }

        .electronics:hover {
          border-color: inherit;
          color: #333;
          background-color: rgba(201, 140, 140, 0.1); /* Lighter tone with reduced opacity */
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        }

        .automobile:hover {
          border-color: inherit;
          color: #333;
          background-color: rgba(155, 164, 139, 0.1); /* Lighter tone with reduced opacity */
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
};

const GujaratTechUniversityContent = () => (
  <div>
    Content of the second tab
  </div>
);

const MoreUniversitiesContent = () => (
  <div>
    Content of the third tab
  </div>
);

export { MumbaiUniversityContent, GujaratTechUniversityContent, MoreUniversitiesContent };
