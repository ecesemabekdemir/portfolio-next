"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Github, ExternalLink, Mail, Linkedin } from "lucide-react";
import "./projects.css";
import data from "./data.json";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(data);

  useEffect(() => {
    setIsVisible(true);
    if (filter === "All") {
      setFilteredProjects(data);
    } else {
      setFilteredProjects(
        data.filter((project) => project.category === filter)
      );
    }
  }, [filter]);

  return (
    <main>
      <section className="container">
        <div className="hero">
          <div className={`hero-content ${isVisible ? "animate" : ""}`}>
            <h1 className="hero-title">My Projects</h1>
            <h2 className="hero-subtitle">
              Showcasing My Web Development Journey
            </h2>
            <p className="hero-description">
              Explore a diverse collection of my projects, showcasing a range of
              skills from sleek frontend designs to robust full-stack
              applications. Each project reflects my passion for creating
              user-friendly, responsive websites and applications, with a focus
              on modern technologies such as React, Bootstrap, and more. Whether
              it's building interactive interfaces or developing complete,
              end-to-end solutions, this portfolio demonstrates my journey and
              expertise in the world of web development.
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

      <section className="projects-content" id="projects">
        <div className="container">
          <div className="projects-filter">
            <button
              className={`filter-btn ${filter === "All" ? "active" : ""}`}
              onClick={() => setFilter("All")}
            >
              All
            </button>
            <button
              className={`filter-btn ${filter === "Frontend" ? "active" : ""}`}
              onClick={() => setFilter("Frontend")}
            >
              Frontend
            </button>
            <button
              className={`filter-btn ${
                filter === "Full Stack" ? "active" : ""
              }`}
              onClick={() => setFilter("Full Stack")}
            >
              Full Stack
            </button>
            <button
              className={`filter-btn ${filter === "CSS" ? "active" : ""}`}
              onClick={() => setFilter("CSS")}
            >
              CSS
            </button>
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <article key={project.id} className="project-card">
                <div className="project-image-container">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="project-image"
                  />
                  <div className="project-links">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <Github size={24} />
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <ExternalLink size={24} />
                    </a>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <span className="project-category">{project.category}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
