import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Banner from "./Banner";
import styles from "../components/css/Navbar.module.css";
import { DropdownContent, studyMaterialsItems } from "../components/Dropdown/DropdownContent";
import DepartmentItems, { departmentItems } from "../components/Dropdown/DepartmentItems";

const Navbar = () => {
  const router = useRouter();
  const [showStudyMaterialsDropdown, setShowStudyMaterialsDropdown] = useState(false);
  const [showDepartmentDropdown, setShowDepartmentDropdown] = useState(false);

  const toggleStudyMaterialsDropdown = () => {
    setShowStudyMaterialsDropdown(!showStudyMaterialsDropdown);
    setShowDepartmentDropdown(false);
  };

  const toggleDepartmentDropdown = () => {
    setShowDepartmentDropdown(!showDepartmentDropdown);
    setShowStudyMaterialsDropdown(false);
  };

  return (
    <div className={styles.navbarContainer}>
      <Banner />
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li className={`${styles.navListItem} ${styles.centered}`}>
            <Link href="/">
              <div className={styles.linkContainer}>
                <div className={styles.logoContainer}>
                  <img className={styles.logo} src="/images/bh_logo.png" alt="Brain Icon" />
                </div>
                <div
                  className={`${styles.brandName} ${router.pathname === "/" ? styles.activeLink : ""
                    }`}
                >
                  Brainheaters
                </div>
              </div>
            </Link>
            
            </li>
          <li className={`${styles.navListItem} ${styles.centered}`}>
          <Link href="/home">
    <a className={router.pathname === "/home" ? styles.activeLink : ""}>Home</a>
  </Link>
          
          </li>
          <li className={`${styles.navListItem} ${styles.centered}`}>
  <div className={styles.dropdownTrigger} onClick={toggleStudyMaterialsDropdown}>
    <span>Study Materials</span>
    <img
      src="/images/down-arrow.png" // Replace with the actual path to your dropdown arrow icon
      alt="Dropdown Arrow"
      className={styles.dropdownArrow} // Apply the defined style for the arrow icon
    />
  </div>
  {showStudyMaterialsDropdown && (
    <div className={`${styles.dropdownContent} ${styles.studyMaterialsDropdown}`}>
      <DropdownContent title="Study Materials" items={studyMaterialsItems} />
    </div>
  )}
</li>

<li className={`${styles.navListItem} ${styles.centered}`}>
  <div className={styles.dropdownTrigger} onClick={toggleDepartmentDropdown}>
    <span>Department & University</span>
    <img
      src="/images/down-arrow.png" // Replace with the actual path to your dropdown arrow icon
      alt="Dropdown Arrow"
      className={styles.dropdownArrow} // Apply the defined style for the arrow icon
    />
  </div>
  {showDepartmentDropdown && (
    <div className={styles.departmentDropdown}>
      <DepartmentItems items={departmentItems} />
    </div>
  )}
</li>

          <li className={`${styles.navListItem} ${styles.centered}`}>
          <Link href="/SuccessStories">
    <a className={router.pathname === "/SuccessStories" ? styles.activeLink : ""}>
      Success Stories
    </a>
  </Link>
          </li>
        </ul>
        <div className={styles.rightSection}>
          <button className={`${styles.button} ${styles.gorditaBold} ${styles.downloadButton}`}>
            Download App
          </button>
          <button className={`${styles.button} ${styles.gorditaBold} ${styles.logOnButton}`}>
            <img src="/images/desktop.svg" alt="Desktop Icon" className={styles.desktopIcon} />
            <Link href="/BhLoginDesktop">Log on Desktop</Link>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
