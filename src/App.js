import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import About from "./pages/About";

function Start() {
  const navigate = useNavigate();

  const aboutPage = () => {
    navigate("/about");
  };

  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-label">My Personal React Site.</p>
        <button className="Main-button" onClick={aboutPage}>
          About Me.
        </button>
      </header>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
