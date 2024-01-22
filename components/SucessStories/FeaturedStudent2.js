import React from "react";
import Link from "next/link";
import {
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";
import styles from "../css/Sucesstories/featuredstudent-vedant.module.css";
import Button from "./Button";

function FeaturedStudent2() {
  return (
    <div className={styles.container1}>
      <div className={styles.bg1}>
        <div className={styles.name}>featured student - Vedant</div>
        <div className={styles.head}>
          <div className={styles.mainhead}>
            <span
              style={{
                backgroundColor: "#FED8D8",
                padding: "5px",
                borderRadius: "23px",
              }}
            >
              Vedant was shocked
            </span>{" "}
            about Brainheaters impact on his engineering journey
          </div>
          <div className={styles.batch}>
            Bh.Student batch 2018 | College: RGIT
          </div>
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
            It was 20th day of September 2018 when my friend shared me this very
            ambiguous link, totally out of context of what we used to talk
            about. That was the day I explored something which was very unusual
            to an Engineering student.
          </div>
          <div className={styles.description1}>
            A site which has already sorted your Engineering studies even before
            your planning. Though I joined classes(vacation batch), there's
            always a concern amongst any learner to give that *extra* to what
            he/she's always planning to. That *extra* gains were totally from
            Team BH.
          </div>
          <div className={styles.description1}>
            It has a tremendous source of material that is of utmost importance.
            This can only be mentioned by the one who sincerely followed what
            they told. Receiving end was completely our's, as they didn't fall
            short in being our source. Recently the results of FE Sem 2 were out
            & I scored a bang on 9.15 gpa.I don't know if this story would be
            the one which the Team BH would consider the BEST.
          </div>
          <div className={styles.description1}>
            To be honest, them reading this will surely have an impact of what
            they're doing in whole. Winding up I would THANK them for the role
            they played in my FRESHERS year & Keep up the Good Work
          </div>
        </div>
      </div>
    </div>
  );
}
export default FeaturedStudent2;
