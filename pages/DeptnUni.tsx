import React from "react";
import UniversityDisplay from "../components/Department & University/UniversityDisplay";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Layout from "./Layout";

const DeptnUni = () => {
  return (
    <div>
      <Layout />  
      <Navbar />
      <UniversityDisplay />
      <Footer />
    </div>
  );
};

export default DeptnUni;
