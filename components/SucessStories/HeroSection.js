import React from "react";
import styles from "../css/Sucesstories/herosection.module.css";
import Button from "./Button";
import { useState, useEffect } from "react";


function HeroSection() {
  const colors = ["red", "blue", "green", "orange"]; // Add your desired colors here
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const currentColor = colors[currentColorIndex];
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.labelrectangle}>
          <div className={styles.labeltext}>SINCE 2013-14</div>
        </div>

        <div className={styles.title}>
          <div className={styles.inspiringTextContainer}>
            <span className={styles.inspiringText}>Inspiring</span>{" "}
            <span style={{ marginLeft: "8px", color: currentColor }}>
              stories
            </span>
            ,
          </div>
          <div className={styles.reportCardsContainer}>
            remarkable report cards{" "}
            <span className={styles.imageContainer}>
              <img src="/images/smilingfacewithtear.png" alt="Inline Image" />
            </span>
          </div>
        </div>

        <div className={styles.subtitle}>
          Efficiency abounds in these success stories of students. Colleges,
          professors and students shaping the future of studies. They do it all
          with the help of Brainheaters.
        </div>
        <Button
          chipStyle={{
            backgroundColor: "#F3F3FF",
            width: "249px",
            display: "inline-flex",
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "46px",
          }}
          textStyle={{ color: "#6658D3", fontSize: "16px", fontweight: 500 }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="/images/download.png"
              style={{ width: "20px", height: "20px", marginRight: "1rem" }}
            />
            <span>Bh.Success Stories</span>
          </div>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
