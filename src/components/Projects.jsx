import { AnimatedSection } from "./AnimatedSection";
import "../App.css";
import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import GitHub from "../assets/github.svg";
import React from 'react';

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
            <div className="project-header">
              <h2>Maze Solving using Metaheuristic Approaches</h2>
              <a
                href="https://github.com/boykin345/MazeSolver"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={GitHub}
                  alt="GitHub Repository"
                  className="github-icon spin-cw"
                />
              </a>
            </div>
            <p className="about-text">
              Solving random maze using several state-of-the-art maze-solving
              approaches: Graph, Non-Graph and Metaheuristic algorithms
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection className="project">
          <div>
            <div className="project-header">
              <h2>Food AI App</h2>
              <a
                href="https://github.com/boykin345/food-ai-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={GitHub}
                  alt="GitHub Repository"
                  className="github-icon spin-cw"
                />
              </a>
            </div>
            <p className="about-text">
              Description of my other awesome project.
            </p>
          </div>
        </AnimatedSection>
      </div>

      <div className="projects-container">
        <AnimatedSection className="project">
          <div className="project-header">
            <h2>This Site</h2>
            <a
              href="https://github.com/boykin345/food-ai-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={GitHub}
                alt="GitHub Repository"
                className="github-icon spin-cw"
              />
            </a>
          </div>
          <p className="about-text">Description of my other awesome project.</p>
        </AnimatedSection>

        <AnimatedSection className="project">
          <div className="project-header">
            <h2>Conversational AI</h2>
            <a
              href="https://github.com/boykin345/ConversationalAI"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={GitHub}
                alt="GitHub Repository"
                className="github-icon spin-cw"
              />
            </a>
          </div>
          <p className="about-text">Description of my other awesome project.</p>
        </AnimatedSection>
      </div>
    </>
  );
}
