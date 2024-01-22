import React from 'react'
import content from './MaterialTableContent'
import styles from '../../components/css/MaterialTable.module.css'

const MaterialTable = () => {

    function displayContent(contentItem, index){
        
       return( <tr className={ index%2==0?styles.tableRowEven: styles.tableRow }>
                <td className={styles.tdataBold}>{contentItem.subName}</td>
                <td className={styles.tdata}> <img src="/images/fi-rr-eye.png" alt="" style={{display:'inline', marginRight: 7}}/> {contentItem.readers} </td>
                <td className={styles.tdata}>{contentItem.lastUpdated}</td>
                <td className={styles.tdata}>{contentItem.pages}</td>
                <td className={styles.tdata}> <img src="/images/fi-sr-star.png" alt="" style={{display:'inline', marginRight: 10}}/>{contentItem.rating}</td>
                <td className={styles.tdVoid}></td>
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
    <div className={styles.tableContainer}>
      <table>
            <tr className={styles.tableRow}> 
              <th className={`${styles.thead} ${styles.subName}`}>Subject Name</th> 
              <th className={`${styles.thead} ${styles.readers}`}>Readers</th>
              <th className={`${styles.thead} ${styles.lastUpdated}`}>Last Updated</th>
              <th className={`${styles.thead} ${styles.pages}`}>Pages</th>
              <th className={`${styles.thead} ${styles.rating}`}>Avg. Rating</th>
              <th className={`${styles.thead} ${styles.void}`}> </th>
            </tr>
            {/* <span className={styles.horizontalLine}></span> */}

            {content.map(displayContent)}

            {/* <span className={styles.horizontalLine}></span> */}
            <tr className={styles.tableRowTotal}> 
              <td className={`${styles.totalRow} ${styles.tdata} ${styles.leftAlign}`}>563 Notes Available</td>
              <td className={`${styles.totalRow} ${styles.tdata}`}>  {content.map(totalReaders)} {total}k </td>
              <td className={`${styles.totalRow} ${styles.tdata} ${styles.rightBorder}`} ></td>
              <td className={`${styles.totalRow} ${styles.tdata} `}></td>
              <td className={`${styles.totalRow} ${styles.tdata}`}> <img src="/images/fi-sr-star.png" alt="" style={{display:'inline', marginRight: 10}}/>  {content.map(totalRating)} {(ratingTotal/content.length).toFixed(1)} </td>
              <td className={`${styles.totalRow} ${styles.tdata} ${styles.void}`}></td>
            </tr>

            {/* <tr >
                <td>Software Engineering</td>
                <td> <img src="/images/fi-rr-eye.png" alt="" style={{display:'inline'}}/>1.3k </td>
                <td>5 April 2023</td>
                <td>178 Pages</td>
                <td> <img src="/images/fi-sr-star.png" alt="" style={{display:'inline'}}/> 4.8</td>
            </tr> */}
          </table>
    </div>
  )
}

export default MaterialTable
