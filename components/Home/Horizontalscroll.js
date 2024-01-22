import React, { useRef, useState } from "react";
import styles from "../css/scroll.module.css"; // Create a CSS module for styling

const MyPage = () => {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust the scrolling speed as needed
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const dynamicValues = ["7,473 Question Papers"];

  return (
    <div className={styles.container}>
      <div
        ref={scrollContainerRef}
        className={styles.horizontalScrollContainer}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div className={styles.horizontalScrollContent}>
          {dynamicValues.map((value, index) => (
            <div key={index} className={`item ${styles.item}`}>
              <div className={`${styles.cardicon}`}>
                <div className={styles.cardimg}>
                  <img src="/images/bh_papers.png" alt="papers" />
                </div>
              </div>
              <div className={`${styles.cardtitle}`}>Bh.Papers</div>

              <div className={`${styles.carddescription}`}>
                Set of past year question papers with deep analysis and
                predictions.
                <br />
                <span className={`${styles.reddescription}`}>
                  Module wise questions & marks distributions chart + Next Paper
                  prediction graph
                </span>
              </div>
              <div className={styles.footer}>
                <div className={styles.dynamic}>{value}</div>
                <div className={`${styles.arrow}`}>{">"}</div>
              </div>
            </div>
          ))}
          {dynamicValues.map((value, index) => (
            <div key={index} className={`item ${styles.item}`}>
              <div
                className={`${styles.cardicon}`}
                style={{ backgroundColor: "#F8EBD3" }}
              >
                <div className={styles.cardimg}>
                  <img src="/images/bh_notes.png" alt="notes" />
                </div>
              </div>
              <div className={`${styles.cardtitle}`}>Bh.Notes</div>

              <div className={`${styles.carddescription}`}>
                Set of past year question papers with deep analysis and
                predictions.
                <br />
                <span className={`${styles.reddescription}`}>
                  Module wise questions & marks distributions chart + Next Paper
                  prediction graph
                </span>
              </div>
              <div className={styles.footer}>
                <div className={styles.dynamic}>{value}</div>
                <div className={`${styles.arrow}`}>{">"}</div>
              </div>
            </div>
          ))}
          {dynamicValues.map((value, index) => (
            <div className={`item ${styles.item}`}>
              <div
                className={`${styles.cardicon}`}
                style={{ backgroundColor: "#E0F9E8" }}
              >
                <div className={styles.cardimg}>
                  <img src="/images/bh_qb.png" alt="qb" />
                </div>
              </div>
              <div className={`${styles.cardtitle}`}>Bh.QBanks</div>

              <div className={`${styles.carddescription}`}>
                Set of past year question papers with deep analysis and
                predictions.
                <br />
                <span className={`${styles.reddescription}`}>
                  Module wise questions & marks distributions chart + Next Paper
                  prediction graph
                </span>
              </div>
              <div className={styles.footer}>
                <div className={styles.dynamic}>{value}</div>
                <div className={`${styles.arrow}`}>{">"}</div>
              </div>
            </div>
          ))}
          {dynamicValues.map((value, index) => (
            <div className={`item ${styles.item}`}>
              <div
                className={`${styles.cardicon}`}
                style={{ backgroundColor: "#DBF0FF" }}
              >
                <div className={styles.cardimg}>
                  <img src="/images/bh_viva.png" alt="viva" />
                </div>
              </div>
              <div className={`${styles.cardtitle}`}>Bh.VIVAs</div>

              <div className={`${styles.carddescription}`}>
                Set of past year question papers with deep analysis and
                predictions.
                <br />
                <span className={`${styles.reddescription}`}>
                  Module wise questions & marks distributions chart + Next Paper
                  prediction graph
                </span>
              </div>
              <div className={styles.footer}>
                <div className={styles.dynamic}>{value}</div>
                <div className={`${styles.arrow}`}>{">"}</div>
              </div>
            </div>
          ))}
          {dynamicValues.map((value, index) => (
            <div className={`item ${styles.item}`}>
              <div
                className={`${styles.cardicon}`}
                style={{ backgroundColor: "#EDE2FF" }}
              >
                <div className={styles.cardimg}>
                  <img src="/images/bh_howtopass.png" alt="howtopass" />
                </div>
              </div>
              <div className={`${styles.cardtitle}`}>Bh.How To Pass</div>

              <div className={`${styles.carddescription}`}>
                Set of past year question papers with deep analysis and
                predictions.
                <br />
                <span className={`${styles.reddescription}`}>
                  Module wise questions & marks distributions chart + Next Paper
                  prediction graph
                </span>
              </div>
              <div className={styles.footer}>
                <div className={styles.dynamic}>{value}</div>
                <div className={`${styles.arrow}`}>{">"}</div>
              </div>
            </div>
          ))}
          {dynamicValues.map((value, index) => (
            <div className={`item ${styles.item}`}>
              <div
                className={`${styles.cardicon}`}
                style={{ backgroundColor: "#DEF7F7" }}
              >
                <div className={styles.cardimg}>
                  <img src="/images/bh_howtopass.png" alt="blueprint" />
                </div>
              </div>
              <div className={`${styles.cardtitle}`}>Bh.Blueprintrs</div>

              <div className={`${styles.carddescription}`}>
                Set of past year question papers with deep analysis and
                predictions.
                <br />
                <span className={`${styles.reddescription}`}>
                  Module wise questions & marks distributions chart + Next Paper
                  prediction graph
                </span>
              </div>
              <div className={styles.footer}>
                <div className={styles.dynamic}>{value}</div>
                <div className={`${styles.arrow}`}>{">"}</div>
              </div>
            </div>
          ))}
          {dynamicValues.map((value, index) => (
            <div className={`item ${styles.item}`}>
              <div
                className={`${styles.cardicon}`}
                style={{ backgroundColor: "#E3EBF6" }}
              >
                <div className={styles.cardimg}>
                  <img src="/images/bh_howtopass.png" alt="reference" />
                </div>
              </div>
              <div className={`${styles.cardtitle}`}>Bh.References</div>

              <div className={`${styles.carddescription}`}>
                Set of past year question papers with deep analysis and
                predictions.
                <br />
                <span className={`${styles.reddescription}`}>
                  Module wise questions & marks distributions chart + Next Paper
                  prediction graph
                </span>
              </div>
              <div className={styles.footer}>
                <div className={styles.dynamic}>{value}</div>
                <div className={`${styles.arrow}`}>{">"}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPage;
