import React from "react";

import Maninintro from "../components/Mainintro";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Resume from "./Resume";
import Gallery from "../components/Gallery";

const Home = () => {
  return (
    <>
      <div>
        <div className="container text-center">{/* <Greetings /> */}</div>
        <Maninintro />
        <div>
          <About />
          <div>
            <Resume />
          </div>
        </div>
        <Services />
      </div>
      <div>
        <Gallery />
      </div>
      <div>
        <Contact />
      </div>
    </>
  );
};

export default Home;
