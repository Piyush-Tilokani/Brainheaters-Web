import React from "react";
import Link from "next/link";
import {
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";
import styles from "../css/Sucesstories/featuredstudent-Antariksh.module.css";
import Button from "./Button";

function FeaturedStudent1() {
  return (
    <div className={styles.container1}>
      <div className={styles.bg1}>
        <div className={styles.name}>featured student - Antariksh</div>
        <div className={styles.head}>
          <div className={styles.mainhead}>How Brainheaters</div>
          <div className={styles.mainhead}>
            <span className={styles.highlightText}>helped Antariksh</span> scale
            his
          </div>
          <div className={styles.mainhead}>academic culture & studies</div>
        </div>

        <div className={styles.batch}>
          Bh.Student batch 2018 | College: PVPPCOE
        </div>

        <Button
          chipStyle={{
            backgroundColor: "#F3F3FF",
            width: "11.5rem",
            height: "4.1rem",
            display: "flex", // Use flex display to align items
            alignItems: "center",
            justifyContent: "center",
            marginTop: "3.2rem",
          }}
          textStyle={{ color: "#6658D3", fontSize: "1.1rem" }}
        >
          Read all Stories
        </Button>
      </div>
      <div className={styles.bg2}>
        <div className={styles.description}>
          <div className={styles.description1}>
            BRAINHEATERS!!! What can I say about them! Let's start from the
            beginning! I was in FE, completely unaware of these engineering
            subjects and literally scared of scoring. Then one of my friends
            shared the link of the WhatsApp group and asked me to join for some
            really helpful and awesome content. I was like, okay! Let's see!
            Then I started referring the study material, notes and all.
          </div>
          <div className={styles.description1}>
            Second semester exams!!I was completely unaware about SPA! But the
            study material on the website really helped me to clear the subject.
            Also, the ' how to clear.... ' series is really very helpful for
            time management.
          </div>
          <div className={styles.description1}>
            Now I am in SE and really happy with the notes, question banks and
            blueprints that you guys have shared, for the first time I am
            expecting a better pointer! Thanks a lot guys you are doing some
            real awesome work there. You guys have set a milestone for many
            young entrepreneurs! Wish you the best for BH.School and keep
            helping us with your amazing content!!Thank you!!
          </div>
        </div>
      </div>
    </div>
  );
}
export default FeaturedStudent1;
