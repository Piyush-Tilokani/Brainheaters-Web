import Navbar from "../components/NavBar";
import FeaturedStudent1 from "../components/SucessStories/FeaturedStudent1";
import FeaturedStudent2 from "../components/SucessStories/FeaturedStudent2";
import HeroSection from "../components/SucessStories/HeroSection";
import WriteYourStory from "../components/SucessStories/WriteYourStory";
import StudentReview from "../components/SucessStories/StudentReview";
import SubFooter from "../components/SucessStories/SubFooter";
import Footer from "../components/Footer.js";

import React, { useEffect, useState } from "react";
import Layout from "./Layout";

function SuccessStories() {
  return (
    <div>
      <Layout />
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <FeaturedStudent1></FeaturedStudent1>;
      <FeaturedStudent2></FeaturedStudent2>
      <WriteYourStory></WriteYourStory>
      <StudentReview></StudentReview>
      <SubFooter></SubFooter>
      <Footer></Footer>
    </div>
  );
}

export default SuccessStories;
