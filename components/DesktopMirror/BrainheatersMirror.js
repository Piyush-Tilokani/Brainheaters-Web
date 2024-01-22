import React, { useState } from "react";
import styles from "../css/DesktopMirror/brainheatersmirror.module.css";
import ListButton from "./ListButton";

function BrainheatersMirror() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex === activeButton ? null : buttonIndex);
  };

  const buttons = [
    { text: "Button 1" },
    { text: "Button 2" },
    { text: "Button 3" },
  ];
  const buttons1 = [
    { text: "Button 4" },
    { text: "Button 5" },
    { text: "Button 6" },
    { text: "Button 7" },
    { text: "Button 8" },
    { text: "Button 9" },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <div className={styles.head}>
          <div className={styles.bhlogo}>
            <img src="images/bh_logo.png" alt="Bh Logo" />
          </div>
          <div className={styles.text}>Brainheaters Mirror</div>
        </div>
        <div className={styles.subtext}>
          <div className={styles.image}>
            <img src="images/rotate.png" alt="Rotate" />
          </div>
          <div className={styles.recent}>Recent</div>
        </div>
        <div className={styles.listitems}>
          {buttons.map((button, index) => (
            <ListButton
              key={index}
              text={button.text}
              isActive={activeButton === index}
              onClick={() => handleButtonClick(index)}
              activeClassName={styles.clicked} // Pass the active class name here
            />
          ))}
        </div>
        <div className={styles.horizontalline}></div>
        <div className={styles.subtext}>
          <div className={styles.recent}>Yesterday</div>
        </div>
        <div className={styles.listitems}>
          {buttons1.map((button, index) => (
            <ListButton
              key={index}
              text={button.text}
              isActive={activeButton === index}
              onClick={() => handleButtonClick(index)}
              activeClassName={styles.clicked} // Pass the active class name here
            />
          ))}
        </div>
      </div>

      <div className={styles.view}></div>
    </div>
  );
}
export default BrainheatersMirror;
