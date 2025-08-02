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
        <h2>About</h2>
        <div>
          <p>
            A just starting React web developer in 2025. This is the sandbox
            place where I explore different frameworks and technologies and
            share experiences and maybe will start a blog page here later.
          </p>
        </div>
        <h2>Background</h2>
        <div>
          <ul>
            <li>Passionate about web development and design.</li>
            <li>Currently learning React and modern web technologies.</li>
            <li></li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default About;
