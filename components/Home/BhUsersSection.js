import React from "react";
import styles from ".././css/BhUsers.module.css";
import content from "./MaterialTableContent";
import AppDropdown from "../Dropdown/AppDropdown";

const BhUsersTest = () => {

    function displayContent(contentItem, index){
        
        return( <tr className={ index%2==0?styles.tableRowEven: styles.tableRow }>
                 <td className={`${styles.tdata} ${styles.left}`}>{contentItem.subName}</td>
                 <td className={`${styles.tdata} ${styles.border}`}>  <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              viewBox="0 0 6 6"
              fill="none"
              className={styles.redCircle}
            >
              <circle cx="3" cy="3" r="3" fill="#FF6464" />
            </svg> <span>{contentItem.readers} Students</span> </td>
                 <td className={`${styles.tdata} ${styles.right}`}> <img src="/images/fi-sr-star.png" alt="" style={{display:'inline',marginRight: 10}}/>{contentItem.rating}</td>
             </tr>);
     }

     var total = 0;
    var ratingTotal = 0;
    function totalReaders(contentItem){
        
        total = total + Number(contentItem.readers.slice(0, (contentItem.readers.length - 1)));
        // total = total;
        // return total;
    }
    function totalRating(contentItem){
        
        ratingTotal = ratingTotal + Number(contentItem.rating);
        // total = total;
        // return total;
    }

  return (
    <div className={styles.componentBox}>
      <div className={styles.main}>
        <div className={styles.leftArea}>
        <h1 className={styles.heading}>Everyone is using Brainheaters <img src="images/sunglasses.png" alt="Cool" style={{ display: "inline", width: "48px", height: "48px" ,marginLeft : "8px", marginTop : "10px"}} /> </h1>
            <div style={{display:"flex", flexDirection: 'row', gap: 39, marginTop:21}}>
                <div> <img src="/images/circularPhotos.png" alt=""  width={182}/> <span className={styles.orange}>Engineering Students using BH</span> </div>
                <div> <h1 className={styles.numberOfstudents}>360+</h1> <span className={styles.collgesIndia}>Colleges across India</span> </div>
            </div>
            <div ><p className={styles.ourCurrent}>Our current data shows - Students from 385 Colleges across university use Brainheaters for academic preparation</p></div>
            <AppDropdown text="Start using Brainheaters"/>
        </div>
        <div className={styles.rightArea}>
          <div className={styles.live}>
            {" "}
            <span>Brainheaters Users </span>{" "}
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              viewBox="0 0 6 6"
              fill="none"
            >
              <circle cx="3" cy="3" r="3" fill="#FF6464" />
            </svg>{" "}
            <p>Live.</p>{" "}
          </div>
          <div className={styles.search}>
          <input type="text" placeholder='check for your college...' className={styles.searchBar}/>
          </div>
          <div className={styles.table}>
          <table>
            <tr className={styles.tableRow}> 
              <th className={`${styles.thead} ${styles.colName} `}>College Name</th> 
              <th className={`${styles.thead} ${styles.students}`}>Total Students</th>
              <th className={`${styles.thead} ${styles.avg} ${styles.right}`}>Avg. Rating</th>
            </tr>

            {content.map(displayContent)}

            <tr className={styles.tableRow}> 
              <td className={`${styles.totalRow} ${styles.tdata} ${styles.left} ${styles.bottom}`}>353+ Colleges...</td>
              <td className={`${styles.totalRow} ${styles.tdata} ${styles.border} ${styles.bottom}`}>  {content.map(totalReaders)} {total} Students</td>
              <td className={`${styles.totalRow} ${styles.tdata} ${styles.right} ${styles.bottom}`}> <img src="/images/fi-sr-star.png" alt="" style={{display:'inline' ,marginRight: 10}}/>  {content.map(totalRating)} {(ratingTotal/content.length).toFixed(1)} </td>
            </tr>

            
          </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BhUsersTest;
