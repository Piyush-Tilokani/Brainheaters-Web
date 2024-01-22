import React, { useState } from 'react'
import styles from "../../components/css/MaterialDisplaySection.module.css"
import DownloadButton from '../Dropdown/AppDropdown'
import  AppDropdown  from '../Dropdown/AppDropdown'
import MaterialTable from './MaterialTable'

const MaterialDisplaySection = () => {

  const [activePart, setActivePart] = useState("Bh.Notes");

  function handleClick(event){
    const newActivePart = event.target.innerHTML.replace("&amp;", "&");
    setActivePart(newActivePart);
  }

  return (
    <div>
      <div className= {styles.materialContainer} >
            <div className={styles.leftSubsection}>
                <h5 className={styles.smallText}>Study Materials</h5>
                <h1 className={styles.heading}>{activePart}</h1>
                <p className={styles.plainText}>Q/A format notes that has module wise distributed questions with answers from references and textbooks. 30-50 Questions just enough for 7+ pointers. <span className={styles.orangeText}>Basically ek aise notes jo module wise, question answer format ho aur most repeated questions bhi cover kare. </span> </p>
                <div> <DownloadButton text="Get Bh.Notes in App" / > </div>
                <div > 
                  <ul className={styles.list}>
                  {activePart == 'Bh.Papers'? <button onClick={handleClick} name='Bh.Papers'><li className={`${styles.listItem} ${styles.active}`}>Bh.Papers</li></button>  :<button onClick={handleClick} name='Bh.Papers'><li className={styles.listItem}>Bh.Papers</li></button>}
                    {activePart == 'Bh.Questionbanks' ? <button onClick={handleClick} name='Bh.Questionbanks'><li className={`${styles.listItem} ${styles.active}`}>Bh.Questionbanks</li></button> : <button onClick={handleClick} name='Bh.Questionbanks'><li className={`${styles.listItem}`}>Bh.Questionbanks</li></button>}
                    {activePart == 'Bh.Notes'?<button onClick={handleClick} name='Bh.Notes'><li className={`${styles.listItem} ${styles.active}`}>Bh.Notes</li></button>: <button onClick={handleClick} name='Bh.Notes'><li className={`${styles.listItem}`}>Bh.Notes</li></button>}
                    { activePart == 'Bh.How to Pass'? <button onClick={handleClick} name='Bh.How to Pass'><li className={`${styles.listItem} ${styles.active}`}>Bh.How to Pass</li></button> :<button onClick={handleClick} name='Bh.How to Pass'><li className={styles.listItem}>Bh.How to Pass</li></button>}
                    {activePart == 'Bh.VIVAs'? <button onClick={handleClick} name='Bh.VIVAs'><li className={`${styles.listItem} ${styles.active}`}>Bh.VIVAs</li></button> :<button onClick={handleClick} name='Bh.VIVAs'><li className={styles.listItem}>Bh.VIVAs</li></button>}
                    {activePart == "References & textbooks"? <button onClick={handleClick} name='References & textbooks'><li className={`${styles.listItem} ${styles.active}`}>References & textbooks</li></button> :<button onClick={handleClick} name='References & textbooks'><li className={styles.listItem}>References & textbooks</li></button>}
                  </ul>
                </div>

            </div>
            <div>
                <img src="/images/phone.png" alt="" className={styles.phoneImg}/>
            </div>
      </div>
      <div className={styles.displayArea}>
        <div style={{display: 'flex', gap: '0.5rem'}}>
          <img src="images/verified.png" alt="" height={22} width={25}/>
          <p className={styles.numberofstudents}>563 Notes Available in App</p>
        </div>
        <div className={styles.searchRow}>
          <input type="text" placeholder='search your subject...' className={styles.searchBar}/>
          <select name="" id="" placeholder='Select Department' className={styles.dropdown1}>
            <option value="">Select Department</option>
            <option value="">Year Sem</option>
          </select>
          <select name="" id="" placeholder='Select Semester' className={styles.dropdown2}>
            <option value="">Select Semester</option>
            <option value="">Year Sem</option>
          </select>
        </div>
        <div className={styles.tableContainer}>
          <MaterialTable />
        </div>


      </div>


    </div>
  )
}

export default MaterialDisplaySection
