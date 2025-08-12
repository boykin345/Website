import "../App.css";
import Navbar from "../components/Navbar";

export function Blog() {
  return (
    <>
      <div className="navbar-container">
        <Navbar />
      </div>
      <title>Blog</title>
      <section className="blog-container">
        <div className="post-row">
          <span className="post-date">August 7, 2025</span>
          <div className="post-info">
            <a href="/MyMacConfig" className="post-link">
              /My_Mac_Config
            </a>
            <span className="post-author"></span>
          </div>
        </div>
        <div className="post-row">
          <span className="post-date">August 2, 2025</span>
          <div className="post-info">
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
