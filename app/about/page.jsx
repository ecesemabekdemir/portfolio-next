"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Download } from "lucide-react";

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

              <Link href={"/dosya/semabekdemir.pdf"} className="cv-button">
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
                  <h4>Kariyer Mimarı ve Bilişim Teknolojileri Akademi</h4>
                  <p>
                    3D Studio Max · AutoCAD · SketchUp · AutoCAD Mimarisi ·
                    Mimari Tasarım · Photoshop
                  </p>
                </li>
                <li>
                  <span className="date">2016-2018</span>
                  <h4>İstanbul Gelişim Üniversitesi</h4>
                  <p>İnşaat Mühendisliği Teknolojileri/Teknisyen</p>
                </li>
                <li>
                  <span className="date">2023</span>
                  <h4>İstanbul Üniversitesi</h4>
                  <p>Bilgisayar Programcılığı</p>
                </li>
                <li>
                  <span className="date">2024</span>
                  <h4>Acunmedya Akademi</h4>
                  <p>HTML· CSS · Javascript · React· Next.jsx ·</p>
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
