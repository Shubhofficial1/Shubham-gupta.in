import Hero from "./Hero/Hero";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Experience from "./Experience/Experience";
import GetInTouch from "./GetInTouch/GetInTouch";
import Banner from "../../Components/Home/Banner";

const HomeScreen = () => {
  return (
    <>
      <Banner />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <GetInTouch />
    </>
  );
};

export default HomeScreen;
