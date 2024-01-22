import React from "react";
import styles from "../css/desktopmirror/dualmirror.module.css";
import Link from "next/link";

function DualMirror() {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>

        <Link href="/home">
        <img className={styles.bhlogo} src="/images/bh_logo.png" alt="logo" />
        </Link>

        <div className={styles.title}>Desktop Mirror</div>
        <Link href="/Mirror">
        <img className={styles.divider} 
        src="/images/arrows.png" alt="arrows" /> 
          </Link>
        <img
          className={styles.profile}
          src="/images/profile.png"
          alt="profile"
        />
      </div>
      <div className={styles.screen}>
        <div className={styles.emptyarea}>
          <div className={styles.mobiletodesktop}>
            <img
              className={styles.mobile}
              src="/images/mobile.png"
              alt="arrows"
            />
            <img
              className={styles.curve}
              src="/images/curve1.png"
              alt="curve"
            />
            <img
              className={styles.curve}
              src="/images/curve1.png"
              alt="curve"
            />
            <img
              className={styles.curve}
              src="/images/curve1.png"
              alt="curve"
            />
            <img className={styles.tab} src="/images/tab.png" alt="arrows" />
          </div>
          <div className={styles.text}>
            <div className={styles.t1}>
              Select a study materials from App and tap on “Desktop Mirror”
            </div>
            <div className={styles.imageContainer}>
              <img
                className={styles.ellipse}
                src="/images/ellipse.png"
                alt="ellipse"
              />
              <img
                className={styles.img}
                src="/images/screen.png"
                alt="screen"
              />
            </div>
          </div>
          <div className={styles.note}>
            Note: You can mirror study materials you have access to as per your
            subscription plan in the App. Studyroom materials and Library Ebooks
          </div>
        </div>
        <div className={styles.emptyarea1}>
          <div className={styles.mobiletodesktop}>
            <img
              className={styles.mobile}
              src="/images/mobile.png"
              alt="arrows"
            />
            <img
              className={styles.curve}
              src="/images/curve1.png"
              alt="curve"
            />
            <img
              className={styles.curve}
              src="/images/curve1.png"
              alt="curve"
            />
            <img
              className={styles.curve}
              src="/images/curve1.png"
              alt="curve"
            />
            <img className={styles.tab} src="/images/tab.png" alt="arrows" />
          </div>
          <div className={styles.text}>
            <div className={styles.t1}>
              Select a study materials from App and tap on “Desktop Mirror”
            </div>
            <div className={styles.imageContainer}>
              <img
                className={styles.ellipse}
                src="/images/ellipse.png"
                alt="ellipse"
              />
              <img
                className={styles.img}
                src="/images/screen.png"
                alt="screen"
              />
            </div>
          </div>
          <div className={styles.note}>
            Note: You can mirror study materials you have access to as per your
            subscription plan in the App. Studyroom materials and Library Ebooks
          </div>
        </div>
      </div>
    </div>
  );
}
export default DualMirror;