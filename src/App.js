import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import MyMacConfig from "./pages/blog-pages/MyMacConfig";
import Coshka from "./assets/coshka.jpeg";
import Logo from "./assets/logo.svg";
import Blog from "./pages/Blog";
import Star from "./assets/Star.png";
import Navbar from "./components/Navbar";
import ApiTime from "./components/ApiTime";

function About() {
  return (
    <>
      <title>About</title>

      <div className="navbar-container">
        <Navbar />
      </div>

      <section className="about-container">
        <img src={Star} alt="main-photo-page" className="main-photo" />
        <h1 className="about-text">Mikhail Y. Kolyakin</h1>
        <div className="about-text">
          <ApiTime></ApiTime>
        </div>
        <div>
          <p className="about-text">
            {" "}
            <img
              src={Logo}
              alt="Logo"
              style={{ width: "30px", height: "30px", verticalAlign: "middle" }}
            />{" "}
            Junior React web developer working in fintech. Interested in game
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
        <Route path="/blog" element={<Blog />} />
        <Route path="/post/:postId" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
