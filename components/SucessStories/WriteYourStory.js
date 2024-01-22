import React from "react";
import styles from "../css/Sucesstories/writeyourstory.module.css";
import Button from "./Button";

const baseFontSize = 16;

function WriteYourStory() {
  return (
    <div className={styles.container3}>
      <div className={styles.maintext}>
        Tell us your success story & get featured on Brainheaters
      </div>
      <Button
        chipStyle={{
          backgroundColor: "#6658D3",
          width: "12.125rem", // 194px / 16px = 12.125rem
          height: "2.813rem", // 45px / 16px = 2.813rem
          display: "flex",
          alignSelf: "center",
          alignItems: "centre",
          justifyContent: "center",
          // 750px / 16px = 46.875rem
          marginTop: `${3.188}rem`, // 51px / 16px = 3.188rem

          fontWeight: 500,
          lineHeight: "normal",
          borderRadius: `${1.406}rem` /* 22.5px / 16px = 1.406rem */, // Added border radius
        }}
        textStyle={{
          color: "#F4F7F8",
          fontSize: "0.875rem",
          fontStyle: "normal",
          textAlign: "center",
          letterSpacing: "-0.005rem",
          marginTop: "0.5rem",
        }}
      >
        Write your story
      </Button>
    </div>
  );
}
export default WriteYourStory;
