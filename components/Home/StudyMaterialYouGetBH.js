import React from "react";
import styles from "../css/studymaterialyougetbh.module.css";
import Horizontalscroll from "./Horizontalscroll";

function StudyMaterialYouGetBH() {
  return (
    <div className={styles.container}>
      <div className={styles.maintext}>
        <img className={styles.image} src="/images/books.png"></img>
        Study materials you get at Brainheaters
      </div>
      <div className={styles.subheading}>
        Our study materials are built with every type of students in mind. We
        know you need IMPs, Notes, Qbanks etc. in most accurate format to make
        your preparation easy & fast. Check what we have for you in Studyroom
      </div>
      {/* <div className="horizontal-scroll-container">
        <div className="horizontal-scroll-content">
          <div className={styles.cards}>
            <div className={styles.cardicon}>
              <div className={styles.cardimg}>
                <img src="/images/bh_papers.png" alt="notes" />
              </div>
            </div>
            <div className={styles.cardtitle}>Bh.Papers</div>
            <div className={styles.carddescription}>
              Set of past year question papers with deep analysis and
              predictions.
              <br />
              <span className={styles.reddescription}>
                Module wise questions & marks distributions chart + Next Paper
                prediction graph
              </span>
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.cardicon} style={{ background: "#F8EBD3" }}>
              <div className={styles.cardimg}>
                <img src="/images/bh_notes.png" alt="notes" />
              </div>
            </div>
            <div className={styles.cardtitle}>Bh.Notes</div>
            <div className={styles.carddescription}>
              Set of past year question papers with deep analysis and
              predictions.
              <br />
              <span className={styles.reddescription}>
                Module wise questions & marks distributions chart + Next Paper
                prediction graph
              </span>
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.cardicon} style={{ background: "#E0F9E8" }}>
              <div className={styles.cardimg}>
                <img src="/images/bh_qb.png" alt="notes" />
              </div>
            </div>
            <div className={styles.cardtitle}>Bh.QBanks</div>
            <div className={styles.carddescription}>
              Set of past year question papers with deep analysis and
              predictions.
              <br />
              <span className={styles.reddescription}>
                Module wise questions & marks distributions chart + Next Paper
                prediction graph
              </span>
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.cardicon} style={{ background: "#DBF0FF" }}>
              <div className={styles.cardimg}>
                <img src="/images/bh_viva.png" alt="notes" />
              </div>
            </div>
            <div className={styles.cardtitle}>Bh.VIVAs</div>
            <div className={styles.carddescription}>
              Set of past year question papers with deep analysis and
              predictions.
              <br />
              <span className={styles.reddescription}>
                Module wise questions & marks distributions chart + Next Paper
                prediction graph
              </span>
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.cardicon} style={{ background: "#EDE2FF" }}>
              <div className={styles.cardimg}>
                <img src="/images/bh_howtopass.png" alt="notes" />
              </div>
            </div>
            <div className={styles.cardtitle}>Bh.How To Pass</div>
            <div className={styles.carddescription}>
              Set of past year question papers with deep analysis and
              predictions.
              <br />
              <span className={styles.reddescription}>
                Module wise questions & marks distributions chart + Next Paper
                prediction graph
              </span>
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.cardicon} style={{ background: "#EDE2FF" }}>
              <div className={styles.cardimg}>
                <img src="/images/bh_howtopass.png" alt="notes" />
              </div>
            </div>
            <div className={styles.cardtitle}>Bh.How To Pass</div>
            <div className={styles.carddescription}>
              Set of past year question papers with deep analysis and
              predictions.
              <br />
              <span className={styles.reddescription}>
                Module wise questions & marks distributions chart + Next Paper
                prediction graph
              </span>
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.cardicon} style={{ background: "#EDE2FF" }}>
              <div className={styles.cardimg}>
                <img src="/images/bh_howtopass.png" alt="notes" />
              </div>
            </div>
            <div className={styles.cardtitle}>Bh.How To Pass</div>
            <div className={styles.carddescription}>
              Set of past year question papers with deep analysis and
              predictions.
              <br />
              <span className={styles.reddescription}>
                Module wise questions & marks distributions chart + Next Paper
                prediction graph
              </span>
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.cardicon} style={{ background: "#EDE2FF" }}>
              <div className={styles.cardimg}>
                <img src="/images/bh_howtopass.png" alt="notes" />
              </div>
            </div>
            <div className={styles.cardtitle}>Bh.How To Pass</div>
            <div className={styles.carddescription}>
              Set of past year question papers with deep analysis and
              predictions.
              <br />
              <span className={styles.reddescription}>
                Module wise questions & marks distributions chart + Next Paper
                prediction graph
              </span>
            </div>
          </div>
        </div>
      </div> */}
      <Horizontalscroll></Horizontalscroll>
    </div>
  );
}

export default StudyMaterialYouGetBH;
