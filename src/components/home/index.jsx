import React from "react";
import Hero from "./Hero";
import Introduce from "./Introduce";
import Feature from "./Feature";
import Service from "./Service";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Feature />
      <Introduce />
      <Service />
      <Footer />
    </div>
  );
};

export default Home;
