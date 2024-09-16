import AboutUsPage from "@/components/AboutPage/AboutPage";
import Footer from "@/components/LandingPage/Footer/Footer";
import Header from "@/components/LandingPage/HeroSection/Header";
import React from "react";

export default function page() {
  return (
    <div className=" container max-w-7xl mx-auto">
      <Header activeNavLink={'about-us'} />
      <AboutUsPage />
      <Footer />
    </div>
  );
}
