"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Download } from "lucide-react";
import "./about.css";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main>
      <section className="container">
        <div className="hero-about">
          <div className={`hero-content-about ${isVisible ? "animate" : ""}`}>
            <h1 className="hero-title-about">About Me</h1>
            <h2 className="hero-subtitle-about">
              My Journey in Web Development
            </h2>
            <p className="hero-description-about">
              From interior architecture to frontend development, my path has
              been driven by a passion for design and technology.
            </p>
          </div>
          <div className="hero-image-container-about">
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

              <Link
                target="_blank"
                href={"/dosya/semabekdemir.pdf"}
                className="cv-button"
              >
                <span className="button-text">
                  CV
                  <Download className="download-icon" />
                </span>
              </Link>
            </div>
            <div className="about-timeline">
              <h3>My Journey</h3>
              <ul className="timeline">
                <li>
                  <span className="date">2016-2017</span>
                  <h4>Career Architect and Information Technologies Academy</h4>
                  <p>
                    3D Studio Max AutoCAD SketchUp AutoCAD Architecture
                    Architecture Design Photoshop
                  </p>
                </li>
                <li>
                  <span className="date">2016-2018</span>
                  <h4>İstanbul Gelişim university</h4>
                  <p>Civil Engineering Technologies/Technician</p>
                </li>
                <li>
                  <span className="date">2023</span>
                  <h4>İstanbul university</h4>
                  <p>Computer Programming</p>
                </li>
                <li>
                  <span className="date">2024</span>
                  <h4>Acunmedya Akademi</h4>
                  <p>HTML CSS Javascript React Next.jsx </p>
                </li>

                <li>
                  <span className="date">2025</span>
                  <h4>I Continue to Grow and Innovate</h4>
                  <p>
                    We are always exploring and implementing new technologies to
                    deliver better web experiences. I am currently working on a
                    project called Koza. In this project, we aim to develop
                    innovative and effective solutions that address the needs of
                    users.
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
