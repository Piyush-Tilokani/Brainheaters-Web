import React from "react";
import styles from "../css/Sucesstories/subfooter.module.css";
import Button from "./Button";
import AppDropDown from "../Dropdown/App2siddesh";

function SubFooter() {
  return (
    <div className={styles.container4}>
      <div className={styles.bg1}>
        <div className={styles.topstories}>
          37000+ <br />
          Top Stories
        </div>
        <div className={styles.buttons}>
          <Button
            chipStyle={{
              backgroundColor: "#F3F3FF",
              width: "180px",
              height: "65px",
              display: "flex", // Use flex display to align items
              alignItems: "center",
              justifyContent: "center",
              marginTop: "27px",
            }}
            textStyle={{ color: "#6658D3", fontSize: "16px" }}
          >
            Read all Stories
          </Button>
          <AppDropDown></AppDropDown>
        </div>
      </div>
      <div className={styles.bg2}>
        <div className={styles.text1}>
          "Brainheaters Study Materials are the most Unique and Precise
          material" say our 35,000 Students (2017-23). Our Defenseless and
          Magical Materials (Bh.Papers, Bh.Notes, Bh.Questionbanks, Bh.How to
          Pass) saved 1000s of Student's Drop, KTs and Golden.
        </div>
        <div className={styles.text2}>
          300+ Colleges | 35k+ Success Stories | Trusted by 325k Engineers
        </div>
      </div>
    </div>
  );
}
export default SubFooter;
