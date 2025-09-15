import "../App.scss";
import Navbar from "./Navbar";
import React from 'react';

export function Blog() {
  return (
    <>
      <div className="navbar-container">
        <Navbar />
      </div>
      <title>Blog</title>
      <section className="blog-container">
        <div className="post-row">
          <span className="post-date about-text">September 10, 2025</span>
          <div className="post-info about-text">
            <a
              href="/NginxARMProblem"
              className="post-link"
            >
              /Nginx_ARM_Problem
            </a>
            <span className="post-author"></span>
          </div>
        </div>
        <div className="post-row">
          <span className="post-date about-text">August 7, 2025</span>
          <div className="post-info about-text">
            <a href="/MyMacConfig" className="post-link">
              /My_Mac_Config
            </a>
            <span className="post-author"></span>
          </div>
        </div>
        <div className="post-row">
          <span className="post-date about-text">August 2, 2025</span>
          <div className="post-info about-text">
            <a
              href="https://github.com/boykin345/Website"
              className="post-link"
            >
              /This website
            </a>
            <span className="post-author"></span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
