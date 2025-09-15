import "../App.scss";
import Navbar from "./Navbar";
import React from 'react';

function NginxARMProblem() {
  return (
    <>
      <title>Nginx ARM Problem</title>

      <div className="navbar-container">
        <Navbar />
      </div>

      <section className="blog-container">
        <h1 className="about-text">Nginx Compatibility Issue</h1>
        <div className="code-container">
          <p className="about-text">This issue goes from Apple implementing ARM chips in their somewhat new Macbooks.
            This issue is especially critical all web developers working with big corporate projects(such as me)\n
            and I think this small ***symlink*** going to help you</p>
            <h3 className="about-text">just put it in your zsh:</h3>
            <pre className="code-block">ln -s /opt/homebrew/etc/nginx/nginx.conf /usr/local/etc/nginx/nginx.conf</pre>
        </div>
      </section>
    </>
  );
}

export default NginxARMProblem;
