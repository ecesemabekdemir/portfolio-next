"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Github, ExternalLink, Mail, Linkedin } from "lucide-react";
import "./projects.css";
const projectsData = [
  {
    id: 1,
    title: "advice-generator-app",
    description:
      "A full-stack e-commerce solution built with Next.js and Stripe integration.",
    image: "/img/advice.png",
    category: "Full Stack",
    githubLink: "https://github.com",
    liveLink: "https://advice-generator-app-hazel-ten.vercel.app/",
  },
  {
    id: 2,
    title: "Electronic-products-list",
    description:
      "A responsive portfolio website showcasing my projects and skills.",
    image: "/img/satis.png",
    category: "Frontend",
    githubLink: "https://github.com",
    liveLink: "https://electronic-products-list.vercel.app/",
  },
  {
    id: 3,
    title: "Figma Learning Page",
    description:
      "A React-based task management application with drag-and-drop functionality.",
    image: "/img/learn.png",
    category: "CSS",
    githubLink: "https://github.com",
    liveLink: "https://learning-figma.vercel.app/",
  },
  {
    id: 4,
    title: "Audiophile",
    description:
      "A weather dashboard that fetches and displays real-time weather data.",
    image: "/img/audiophile.png",
    category: "CSS",
    githubLink: "https://github.com",
    liveLink: "https://audiophile-mu-three.vercel.app/",
  },
  ,
  {
    id: 5,
    title: "Linkedln Clone",
    description:
      "A professional network platform that replicates core LinkedIn features, allowing users to connect, share updates, and manage their profiles",
    image: "/img/linkedln.png",
    category: "Full Stack",
    githubLink: "https://github.com",
    liveLink: "https://linkedln-clone-umber.vercel.app/linked",
  },
  // Add more projects as needed
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  useEffect(() => {
    setIsVisible(true);
    if (filter === "All") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(
        projectsData.filter((project) => project.category === filter)
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
              Explore a collection of my projects, ranging from frontend designs
              to full-stack applications.
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
