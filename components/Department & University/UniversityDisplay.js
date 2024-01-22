import React from "react";
import styles from "../css/UniversityDisplay.module.css";
import content from "../../components/StudyMaterial/MaterialTableContent";

const UniversityDisplay = () => {

  function displayContent(contentItem, index){
        
    return( <tr className={ index%2==0?styles.tableRowEven: styles.tableRow }>
             <td className={styles.tdataBold}>{contentItem.subName}</td>
             <td className={styles.tdata}>  {contentItem.readers} </td>
             <td className={styles.tdata}>{contentItem.lastUpdated}</td>
             <td className={styles.tdata}> <img src="/images/verified.png" alt="" style={{display:'inline'}}/> </td>
             <td className={styles.tdata}> <img src="/images/fi-sr-star.png" alt="" style={{display:'inline', marginRight: 10}}/>{contentItem.rating}</td>
             <td className={styles.view}> View </td>
         </tr>);
 }

 

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <img src="/images/MU.png" alt="" />
        <span>Computer Engineering</span>
      </div>
      <div className={styles.avalability}>
        <span className={styles.plainText}>
          {" "}
          <span className={styles.bold}>85</span> Subjects |{" "}
          <span className={styles.bold}>564</span> Study Materials
        </span>
      </div>
      <div>
        <select
          name=""
          id=""
          placeholder=""
          className={styles.dropdown2}
        >
          <option value="">2nd Year - Semester 4</option>
          <option value="">Year Sem</option>
        </select>
      </div>
      <div className={styles.tableContainer}>
      <div style={{display:"flex", flexDirection: "row", marginBottom: 25,}}>
        <div className={styles.numberContainer}> 
          <img src="/images/verified.png" alt="" />
          <p>6 Subjects | </p> <p>256 Study Materials  -  Available in App </p>
        </div>
        <div className={styles.buttonContainer}>
          <p>Download App Now</p>
          <img src="/images/playstore.png" className={styles.image} alt="" />
            <span className={styles.line}></span>
            <img src="/images/App_store.png" className={styles.image} alt="" />
        </div>
      </div>
      <hr />
      <table style={{marginTop: 18}}>
            <tr className={styles.tableRow}> 
              <th className={`${styles.thead} ${styles.subName}`}>Subject Name</th> 
              <th className={`${styles.thead} ${styles.readers}`}>Study Material</th>
              <th className={`${styles.thead} ${styles.lastUpdated}`}>Last Updated</th>
              <th className={`${styles.thead} ${styles.pages}`}>Verified</th>
              <th className={`${styles.thead} ${styles.rating}`}>Avg. Rating</th>
              <th className={`${styles.thead} ${styles.void}`}> </th>
            </tr>
            {/* <span className={styles.horizontalLine}></span> */}

            {content.map(displayContent)}

            {/* <span className={styles.horizontalLine}></span> */}
            

            {/* <tr >
                <td>Software Engineering</td>
                <td> <img src="/images/fi-rr-eye.png" alt="" style={{display:'inline'}}/>1.3k </td>
                <td>5 April 2023</td>
                <td>178 Pages</td>
                <td> <img src="/images/fi-sr-star.png" alt="" style={{display:'inline'}}/> 4.8</td>
            </tr> */}
          </table>
    </div>
      
      
    </div>
  );
};

export default UniversityDisplay;
