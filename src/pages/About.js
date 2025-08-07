import "../App.css";
import Navbar from "../components/Navbar";
import Coshka from "../assets/coshka.jpeg";
import Logo from "../assets/logo.svg";

function About() {
  return (
    <>
      <title>About</title>

      <div className="navbar-container">
        <Navbar />
      </div>

      <section className="about-container">
        <h1 className="about-text">Mikhail Y. Kolyakin</h1>
        <div>
          <p className="about-text">
            A just starting{" "}
            <img
              src={Logo}
              alt="Logo"
              style={{ width: "30px", height: "30px", verticalAlign: "middle" }}
            />{" "}
            React web developer in 2025 in fintech. Maybe will start a blog page
            here later. Can talk a lot about game development, especially of
            grand strategy games. Interested in urbanistics and architecture.
            <ul>
              <li>
                Having a <a href={Coshka}>🐈</a>
              </li>
            </ul>
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
