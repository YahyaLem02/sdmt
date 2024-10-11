import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import ServicesDMT from "../components/Sections/ServicesDMT";
import Projects from "../components/Sections/Projects";
import Blog from "../components/Sections/timoignage";
import Pricing from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer"
import DetailedServices from "../components/Sections/DetailedServices";

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <ServicesDMT />
      <DetailedServices />



      {/* <Projects /> */}
       <Blog />
      {/* <Pricing /> */}
      <Contact />
      <Footer /> 
    </>
  );
}


