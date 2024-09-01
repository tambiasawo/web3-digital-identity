import Navbar from "@/components/navbar/navbar";
import React from "react";
import HeroSection from "./hero-section";
import Section from "./section";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <Section/>
    </div>
  );
};

export default LandingPage;
