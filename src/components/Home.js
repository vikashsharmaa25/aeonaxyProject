import React from "react";
import HeroSection from "./HeroSection";
import CustomCarousel from "./Carousel/Carousel";
import PressReleases from "./PressReleases/PressReleases";
import News from "./News/News";
import Card from "./Card/Card";
import Social from "./Social";
import Contact from "./Contact";

function Home() {
  return (
    <>
      <div className="p-5">
        <HeroSection />
        <CustomCarousel />
        <PressReleases />
        <News />
        <Card />
        <Social />
        <Contact />
      </div>
    </>
  );
}

export default Home;
