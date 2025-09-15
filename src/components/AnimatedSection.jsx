import { useEffect } from "react";
import React from 'react';

export function AnimatedSection({ children, className = "", ...props }) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".animated-section");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className={`animated-section hidden ${className}`} {...props}>
      {children}
    </section>
  );
}

export default AnimatedSection;
