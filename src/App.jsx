import "./App.scss";
import {Route, Routes} from "react-router-dom";
import Contact from "./components/Contact";
import MyMacConfig from "./components/MyMacConfig";
import Coshka from "./assets/coshka.jpeg";
import Logo from "./assets/logo.svg";
import Blog from "./components/Blog";
import Star from "./assets/Star.png";
import Navbar from "./components/Navbar";
import NginxARMProblem from "./components/NginxArmProblem";
import React from 'react'

function About() {
    return (
        <>
            <meta name="viewport" content="initial-scale=1.0"/>
            <meta charSet="utf-8"/>
            <title>About</title>

            <div className="navbar-container">
                <Navbar/>
            </div>

            <section className="about-container">
                <img src={Star} alt="main-photo-page" className="main-photo"/>
                <h1 className="about-text">Mikhail Y. Kolyakin</h1>
                <div>
                    <p className="about-text">
                        {" "}
                        <img
                            src={Logo}
                            alt="Logo"
                            style={{width: "30px", height: "30px", verticalAlign: "middle"}}
                        />{" "}
                        Junior React web developer working in fintech. Interested in game
                        development, especially of grand strategy games, as well as
                        urbanistics and architecture.
                        Also, a <a href={Coshka}>🐈</a> lives with me.
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
                <Route path="/" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/mymacconfig" element={<MyMacConfig/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/post/:postId" element={<Blog/>}/>
                <Route path="/NginxARMProblem" element={<NginxARMProblem/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
