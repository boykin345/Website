import { AnimatedSection } from "../components/AnimatedSection";
import "../App.css";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";

export default function Projects() {
  return (
    <>
      <div className="navbar-container">
        <Navbar />
      </div>
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <div className="projects-container">
        <AnimatedSection className="project">
          <div>
            <h2>Maze Solving using Metaheuristic Approaches</h2>
            <p>
              Solving random maze using several state-of-the-art maze-solving
              approaches: Graph, Non-Graph and Metaheuristic algorithms
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection className="project">
          <div>
            <h2>Food AI App</h2>
            <p>Description of my other awesome project.</p>
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection>
        <div className="projects-container-right">
          <h1>Project: Yet Another Awesome Project</h1>
        </div>
      </AnimatedSection>
    </>
  );
}
