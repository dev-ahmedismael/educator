import React from "react";
import About from "./about/About";
import BestCategories from "./best-categories/BestCategories";
import Banner from "./banner/Banner";
import Reviews from "./reviews/Reviews";

const HomePage = () => {
  return (
    <>
      <About />
      <BestCategories />
      <Banner />
      <Reviews />
    </>
  );
};

export default HomePage;
