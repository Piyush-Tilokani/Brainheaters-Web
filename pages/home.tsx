import React from "react";
import Navbar from "../components/NavBar";
import Hero from "../components/Home/Hero";
import DepartmentsSection from "../components/Home/DepartmentsSection"; // Import the DepartmentSection component
import StatsBanner from "../components/Home/StatsBanner";
import StudentsChoose from "../components/Home/StudentsChoose.js";
import Footer from "../components/Footer.js";
import StudyMaterialYouGetBH from "../components/Home/StudyMaterialYouGetBH";
import OurRecipes from "../components/Home/OurRecipes";
import BhUsersSection from "../components/Home/BhUsersSection";
import Layout from "./Layout";

const Home = () => {
  return (
    <div>
      <Layout />
      <Navbar />
      <Hero />
      <StatsBanner />
      <DepartmentsSection />
      <BhUsersSection />
      <StudyMaterialYouGetBH />
      <StudentsChoose />
      <OurRecipes />
      <Footer />

      {/* Use the imported DepartmentSection component here */}
    </div>
  );
};

export default Home;
