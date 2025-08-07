import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import MyMacConfig from "./pages/MyMacConfig";
import Coshka from "./assets/coshka.jpeg";
import Logo from "./assets/logo.svg";

import Navbar from "./components/Navbar";

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
            React web developer in 2025 working in fintech. Interested in game
            development, especially of grand strategy games, as well as
            urbanistics and architecture.
            <ul>
              <li>
                Also, a <a href={Coshka}>🐈</a> lives with me.
              </li>
            </ul>
          </p>
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mymacconfig" element={<MyMacConfig />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
