import Skills from "@/components/skills";
import Image from "next/image";
import Hero from "@/components/hero";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div>
      <div className="container">
        <Hero />
      </div>
      <div className="projects" id="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {[1, 2, 3].map((project) => (
              <div key={project} className="project-card">
                <Image
                  src="/img/learn.png"
                  alt={`Project ${project}`}
                  width={300}
                  height={200}
                  className="project-image"
                />
                <div className="project-content">
                  <h3 className="project-title">Project {project}</h3>
                  <p className="project-description">
                    A modern web application built with React and Next.js,
                    featuring responsive design and smooth animations.
                  </p>
                  <a
                    href="https://banner-sable.vercel.app/"
                    target="_blank"
                    className="project-link"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Skills />
      <Contact />
    </div>
  );
}
