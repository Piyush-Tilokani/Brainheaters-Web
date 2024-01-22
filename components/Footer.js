import React from "react";
import styles from "./css/footer.module.css";

function Footer() {
  return (
    <div className={styles.container5}>
      <div className={styles.toppart}>
        <div className={styles.partone}>
          <div className={styles.branding}>
            <div className={styles.bhlogo}>
              <img src="/images/bh_logo.png" alt="Play Store Icon" />
            </div>
            <div className={styles.bh}>Brainheaters</div>
          </div>

          <div className={styles.threeoptions}>
            <div className={styles.text1}>Terms & Policy</div>
            <div className={styles.hiringblock}>
              <div className={styles.labelrectangle}>
                <div className={styles.hiring}>WE’RE HIRING!</div>
              </div>
              <div className={styles.text2}>Jobs & Internships</div>
            </div>
            <div className={styles.text3}>Success Stories</div>
          </div>
        </div>
        <div className={styles.parttwo}>
          <div className={styles.download}>Download the App</div>
          <div className={styles.logos}>
            <div className={styles.google}>
              <img src="/images/playstore.png" alt="Play Store Icon" />
            </div>
            <div className={styles.apple}>
              <img src="/images/appstoreicon.png" alt="App Store Icon" />
            </div>
          </div>
        </div>
        <div className={styles.partthree}>
          <div className={styles.stayconnected}>Stay Connected:</div>
          <div className={styles.social}>
            <div className={styles.whatsapp}>
              <div className={styles.whatsapplogo}>
                <img src="/images/whatsapp.png" alt="Whatsapp Icon" />
              </div>
              <div className={styles.socialtext1}>Bh.Community</div>
            </div>
            <div className={styles.instagram}>
              <div className={styles.instagramlogo}>
                <img src="/images/instagram.png" alt="Insta Icon" />
              </div>
              <div className={styles.socialtext2}>@brainheaters</div>
            </div>
            <div className={styles.youtube}>
              <div className={styles.youtubelogo}>
                <img src="/images/youtube.png" alt="YT Icon" />
              </div>
              <div className={styles.socialtext2}>@brainheaters</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.horizontalline}></div>
      <div className={styles.bottompart}>
        <div className={styles.comp}>
          <img src="/images/component.png" alt="component" />
        </div>
        <div className={styles.bottomfirst}>2014 - 2023 Brainheaters.</div>
        <div className={styles.bottomfirst}>All rights reserved.</div>
        <div className={styles.bottomsecond}>Designed & Developed in India</div>
        <div className={styles.heart}>
          <img src="/images/heart2.png" alt="heart" />
        </div>
      </div>
    </div>
  );
}
export default Footer;
