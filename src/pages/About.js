import { AnimatedSection } from "../components/AnimatedSection";
import "../App.css";
import PersonalInfoTab from "../components/PersonalInfoTab";
import { Helmet } from "react-helmet";
import ProjectsTab from "../components/ProjectsTab";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Me</title>
      </Helmet>

      <AnimatedSection>
        <div className="aboutsection">
          <PersonalInfoTab />
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div>
          <ProjectsTab />
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div>
          <h2>12345</h2>
        </div>
      </AnimatedSection>
    </>
  );
}
