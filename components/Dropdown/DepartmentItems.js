import React, { useState, useEffect } from "react";
import Link from "next/link"; // Import the Link component from Next.js

export const departmentItems = [
  {
    title: "Mumbai University",
    content: "Standard MU Syllabus & 7 Departments",
    icon: "images/Mu.png",
    link: "/DeptnUni",
  },
  {
    title: "Gujarat University",
    content: "Standard GTU Syllabus & 7 Departments",
    icon: "images/GTU.png",
    link: "/pages/GujaratUniversity",
  },
  // ... Add other departments with their icons and links
];

const depts = [
  { "Computer": "pink", Link: "/pages/GujaratUniversity" },
  { "IT": "purple", Link: "/pages/ITDepartment" }, // Add links for other departments
  { "Electronics & Telecom": "green", Link: "/pages/ElectronicsDepartment" },
  // ... Add links for other departments
];

const DepartmentItems = ({ items }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedItem, setExpandedItem] = useState(null);

  useEffect(() => {
    setIsVisible(true);

    return () => {
      setIsVisible(false);
    };
  }, []);

  const toggleItem = (index) => {
    if (expandedItem === index) {
      setExpandedItem(null);
    } else {
      setExpandedItem(index);
    }
  };

  const handleDeptClick = (deptTitle, deptLink) => {
    // Implement your action for when a department is clicked
    console.log(`Clicked on ${deptTitle}`);
    // Navigate to the department's page using the deptLink
    window.location.href = deptLink; // Use window.location.href to navigate
  };

  return (
    <div className={`university-items ${isVisible ? 'visible' : ''}`}>
      <div className="university-headings">
        {items.map((item, index) => (
          <div key={index} className="university-item">
            <div className="university-image">
              <img src={item.icon} alt={item.title} />
            </div>
            <div className="university-content">
              <Link href={item.link || '#'}>
                <h3 className="university-title" onClick={() => toggleItem(index)}>
                  {item.title}
                </h3>
              </Link>
              <div className="university-content">
                <p>{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="university-info">
        <h3>MU Departments we cover : </h3>
        <ul className="dept-list">
          {depts.map((dept, index) => (
            <li key={index}>
              <span
                className="dept-circle"
                style={{
                  backgroundColor: depts[index][Object.keys(dept)[0]],
                }}
                onClick={() => handleDeptClick(Object.keys(dept)[0], dept.Link)}
              ></span>
              <span className="dept-name">{Object.keys(dept)[0]}</span>
            </li>
          ))}
        </ul>
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

          .dept-circle {
            width: 0.3125rem;
            height: 0.3125rem;
            flex-shrink: 0;
            border-radius: 50%;
            margin-right: 5px;
            display: inline-block;
            margin-right: 0.8rem;
          }

          .dept-name {
            color: #595959;
            font-family: Gordita Regular;
            font-size: 0.875rem;
            font-style: normal;
            line-height: 160%; /* 1.4rem */
            letter-spacing: -0.0175rem;
            cursor: pointer;
            
          }
          

          .dept-list {
            list-style-type: none; /* Remove bullet points */
            padding-left: 0; /* Remove default left padding for list */
          }
      
          .university-items {
          background-color:white;
          display: flex;
          flex-direction: row;
          width: 38vw;
          height: auto;
          border-radius: 0.9375rem;
          background: #FFF;
          box-shadow: 0px 4px 100px 0px rgba(0, 0, 0, 0.15);
          width: 40rem;
          height: 23.25rem;
          margin-left: 1rem;
         
        }

        // This is description of the university
        .university-headings{
          color: #8E8E8E;
          font-family: Gordita regular;
          font-size: 0.75rem;
          line-height: 160%; /* 1.2rem */
          letter-spacing: -0.015rem;
          width : 60%;
          padding:30px 15px 0px 3px;
          cursor: pointer;
        }
       
        .university-item {
          // border: 1px solid #ddd;  /* Aditya removed a thin border to each list item */
          padding: 10px;
          margin-bottom: 10px;
          border-radius: 0.9375rem;
          margin-right: 10px;
          display: flex;
          flex-direction: row;
          transition: background-color 0.3s ease; /* Add a smooth transition for the hover effect */
        }
        
        .university-item:hover {
          background-color: #F3F3FF; /* Change background color on hover */
        }
        
        .university-image {
          width: 10%;
          height: 100%;
          margin-right: 1rem;
          margin-left: 3rem;
        }
        
   
        .university-title {
          color: #363A3F;
          font-family: Gordita Bold;
          font-size: 0.875rem;
          line-height: 160%; /* 1.4rem */
          letter-spacing: -0.0175rem;
        }
        .university-info{
          background-color: #F4F7F8;
          width:40%;
          padding-left:2rem;
          padding-top:2rem;
          border-radius: 0.9375rem;
          // padding:40px 10px 25px 50px;
        }
        .university-info ul{
          padding:10px 0px;
        }
        .university-info li{
          padding-top:5px;
          padding-bottom:5px;
          color:black;

        }
        
        .university-items {
          opacity: 0; /* Initially set opacity to 0 */
          transition: opacity 0.5s ease-in-out; /* Add a transition effect */
        }

        .university-items.visible {
          opacity: 1; /* When visible, set opacity to 1 */
        }

      `}
      </style>
    </div>
  );
};

export default DepartmentItems;
