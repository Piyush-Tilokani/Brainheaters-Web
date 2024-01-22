import React from "react";
import styles from "../css/OurRecipes.module.css";
import { useState } from "react";

const OurRecipes = () => {
  const [activePart, setActivePart] = useState("Term Test Preparation");

  function handleClick(event) {
    const newActivePart = event.target.innerHTML.replace("&amp;", "&");
    setActivePart(newActivePart);
    console.log(activePart);
  }

  return (
    <div>
      <div className={styles.heading}>
        {" "}
        <h1 className={styles.headingText}>Our Recipes for Exams</h1>{" "}
      </div>
      <div className={styles.tabsContainer}>
        {" "}
        <span
          className={
            activePart == "Term Test Preparation"
              ? `${styles.activeTab}`
              : `${styles.temp}`
          }
          onClick={handleClick}
        >
          Term Test Preparation
        </span>
        <span
          onClick={handleClick}
          className={
            activePart == "VIVA / Oral Exams"
              ? `${styles.activeTab}`
              : `${styles.temp}`
          }
        >
          VIVA / Oral Exams
        </span>
        <span
          onClick={handleClick}
          className={
            activePart == "Final Exam Preparation"
              ? `${styles.activeTab}`
              : `${styles.temp}`
          }
        >
          Final Exam Preparation
        </span>{" "}
      </div>
      <div className={styles.recipecontainer}>
        <div className={styles.imageRow}>
          <div>
            <img
              src="/images/expressive-young-girl-posing-studio 1.png"
              alt=""
            />
          </div>
          <div className={styles.right}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              {" "}
              <button className={styles.grey}>Score Avg 15+ out of 20</button>
              <button className={styles.white}>
                {" "}
                <img src="/images/verifiedBlue.png" alt="" width={20} />{" "}
                Referred by 30k+ students
              </button>{" "}
            </div>
            <div className={styles.recipeItem}>
              {" "}
              <div>
                <span className={styles.recipeNum}>1.</span>{" "}
              </div>{" "}
              <div>
                <span className={styles.recipeHeading}>
                  Collect questions from Assignments
                </span>{" "}
                <p className={styles.recipeDesc}>
                  Open your class work assignments and select the questions
                  which are in your TT portion
                </p>
              </div>{" "}
            </div>
            <div className={styles.recipeItem}>
              {" "}
              <div>
                <span className={styles.recipeNum}>2.</span>
              </div>{" "}
              <div>
                <span className={styles.recipeHeading}>
                  Collect questions from Bh.QuestionBanks
                </span>{" "}
                <p className={styles.recipeDesc}>
                  Go to Bh.Qbanks and simply refer the list of questions in each
                  module based on your TT portion
                </p>
              </div>{" "}
            </div>
            <div className={styles.recipeItem}>
              {" "}
              <div>
                <span className={styles.recipeNum}>3.</span>
              </div>{" "}
              <div>
                <span className={styles.recipeHeading}>
                  Start learning from Bh.Notes
                </span>{" "}
                <p className={styles.recipeDesc}>
                  Open Bh.Notes and start learning. It has module wise answers
                  to almost all imp questions.{" "}
                </p>
              </div>{" "}
            </div>
          </div>
        </div>
        <div className={styles.bottomDesc}>
          Start using Brainheaters for your UTs, VIVAs and Final Exams now!
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {" "}
          <button className={styles.bottomButton}>
            Get Started with Brainheaters
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default OurRecipes;
