import React from "react";
import styles from "../css/DesktopMirror/listbutton.module.css";

const ListButton = ({ text, isActive, onClick, activeClassName }) => {
  return (
    <button
      className={`${styles.listbutton} ${isActive ? activeClassName : ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ListButton;
