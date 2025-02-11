"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main>
      <section className="container">
        <div className="hero">
          <div className={`hero-content ${isVisible ? "animate" : ""}`}>
            <h1 className="hero-title">About Me</h1>
            <h2 className="hero-subtitle">My Journey in Web Development</h2>
            <p className="hero-description">
              From interior architecture to frontend development, my path has
              been driven by a passion for design and technology.
            </p>
          </div>
          <div className="hero-image-container">
            <div className="hero-image">
              <Image
                src="/img/user.png"
                alt="Sema Bekdemir"
                width={450}
                height={450}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="about-content" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2 className="section-title">My Story</h2>
              <p>
                My journey into the world of web development began with a
                foundation in interior architecture and construction technology.
                This unique background has given me a distinctive perspective on
                design and functionality, which I now apply to creating digital
                spaces.
              </p>
              <p>
                As I transitioned into frontend development, I discovered a
                passion for crafting user-friendly and responsive websites. My
                experience in spatial design translates seamlessly into creating
                intuitive user interfaces and engaging web experiences.
              </p>
              <p>
                Today, I specialize in modern web technologies like React and
                Next.js, always striving to stay at the forefront of the
                ever-evolving web development landscape. My goal is to build
                websites that are not only visually appealing but also highly
                functional and accessible.
              </p>
            </div>
            <div className="about-timeline">
              <h3>My Journey</h3>
              <ul className="timeline">
                <li>
                  <span className="date">2015</span>
                  <h4>Began studies in Interior Architecture</h4>
                  <p>
                    Developed a strong foundation in design principles and
                    spatial thinking.
                  </p>
                </li>
                <li>
                  <span className="date">2018</span>
                  <h4>Discovered Web Development</h4>
                  <p>
                    Started learning HTML, CSS, and JavaScript in my free time.
                  </p>
                </li>
                <li>
                  <span className="date">2020</span>
                  <h4>Transitioned to Frontend Development</h4>
                  <p>
                    Began focusing full-time on web development, specializing in
                    frontend technologies.
                  </p>
                </li>
                <li>
                  <span className="date">2022</span>
                  <h4>Mastered React and Next.js</h4>
                  <p>
                    Deepened my expertise in modern JavaScript frameworks and
                    server-side rendering.
                  </p>
                </li>
                <li>
                  <span className="date">Present</span>
                  <h4>Continuing to Grow and Innovate</h4>
                  <p>
                    Constantly learning and applying new technologies to create
                    better web experiences.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
