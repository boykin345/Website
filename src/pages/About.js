import "../App.css";
import Navbar from "../components/Navbar";

function About() {
  return (
    <>
      <title>About</title>

      <div className="navbar-container">
        <Navbar />
      </div>

      <section className="about-container">
        <h1>Mikhail Y. Kolyakin</h1>
        <div>
          <p className="about-text">
            A just starting React web developer in 2025 in fintech. Maybe will
            start a blog page here later. Can talk a lot about game development
            of grand strategy games. Read a lot about urbanistics and
            architecture.
            <ul>
              <li>Have a 🐱</li>
            </ul>
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
