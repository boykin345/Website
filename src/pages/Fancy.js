import { AnimatedSection } from "../components/AnimatedSection";
import "../App.css";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";

export default function Fancy() {
  return (
    <>
      <div className="navbar-container">
        <Navbar />
      </div>
      <Helmet>
        <title>Fancy Page</title>
      </Helmet>

      <AnimatedSection>
        <div className="projects-container">
          <h1>Project: My Awesome Project</h1>
        </div>
      </AnimatedSection>

      <AnimatedSection></AnimatedSection>

      <AnimatedSection></AnimatedSection>
    </>
  );
}
