import React from "react";
import styles from ".././css/DesktopMirror/bhdesktopmirror.module.css";
import Button from "../SucessStories/Button";
// import { useHistory } from "react-router-dom";
import Link from "next/link";

function BhlogintoDesktop() {
  return (
    <div className={styles.container}>
      <div className={styles.imagecontainer}>
        <div className={styles.image}>
          <img src="/images/beautifulwoman.png" alt="Bh.Desktop" />
          <img
            src="images/bh_logo.png"
            alt="Bh Logo"
            className={styles.bhlogo}
          />
          <div className={styles.heading}>Bh.Desktop Mirror</div>
          <div className={styles.subheading}>
            Study experience with larger screens. Our web mirror effortlessly
            bridges the study gap between your mobile and desktop devices
            instantly.
          </div>
        </div>
      </div>
      <div className={styles.login}>
        <div className={styles.topbar}>
          <div className={styles.logos}>
            <img src="/images/playstore.png" alt="Playstore" />
          </div>
          <div className={styles.logos}>
            <img src="/images/appstoreicon.png" alt="App Store" />
          </div>
          <div className={styles.cross}>
            <Link href="/home">
            <img src="/images/cross.svg" alt="close" />
            </Link>
          </div>
        </div>
        <div className={styles.loginbox}>
          <div className={styles.logintext}>Login with App account</div>
          <div className={styles.emailinputcontainer}>
            <input
              type="email"
              className={styles.emailinput}
              placeholder="Email Address"
            />
          </div>
          <div className={styles.passwordcontainer}>
            <input
              type="password" // Use type="password" for masking input with dots
              className={styles.passwordinput}
              placeholder="Password"
            />
          </div>
          <Button
            chipStyle={{
              backgroundColor: "#6658D3",
              width: "331px",
              height: "55px",
              display: "flex", // Use flex display to align items
              alignItems: "center",
              aligntSelf: "centre",
              justifyContent: "center",
              marginTop: "3.2rem",
              marginLeft: "14.6rem",
            }}
            textStyle={{
              color: "#FFFFFF",
              fontSize: "1.1rem",
              letterSpacing: "-0.02rem", // Add letter spacing
              // Add font weight
            }}
          >
            <Link href="/Mirror"> Continue </Link>
          </Button>
          <div className={styles.text}>
            Don't have an account?{" "}
            <span style={{ color: "#6658D3" }}>Download Brainheaters App</span>
          </div>
          <div className={styles.orsection}>
            <div className={styles.horizontalline}></div>
            <h1 className={styles.or}>OR</h1>
            <div className={styles.horizontalline}></div>
          </div>
          <Button
            chipStyle={{
              backgroundColor: "#F4F7F8",
              width: "331px",
              height: "55px",
              display: "inline-flex",
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "46px",
              border: "2px solid #374957", // Add border property
            }}
            textStyle={{ color: "#374957", fontSize: "16px", fontweight: 500 }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src="/images/qrcode.png"
                style={{ width: "20px", height: "20px", marginRight: "16px" }}
              />
              <Link href="/Mirror"> Login with direct QR</Link>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BhlogintoDesktop;
