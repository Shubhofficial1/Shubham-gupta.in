import Banner from "../components/molecules/Banner";
import Hero from "../components/organisms/Hero";
import Skills from "../components/organisms/Skills";
import Projects from "../components/organisms/Projects";
import Experience from "../components/organisms/Experience";
import GetInTouch from "../components/organisms/GetInTouch";

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
