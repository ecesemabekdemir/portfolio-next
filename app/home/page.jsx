import Skills from "@/components/skills";
import Image from "next/image";
import Hero from "@/components/hero";
import Link from "next/link";

const projectsData = [
  {
    id: 1,
    title: "Linkedln Clone",
    description:
      "A professional network platform that replicates core LinkedIn features, allowing users to connect, share updates, and manage their profiles.",
    image: "/img/linkedln.png",
    category: "Full Stack",
    githubLink: "https://github.com/ecesemabekdemir/linkedln-clone",
    liveLink: "https://linkedln-clone-umber.vercel.app/linked",
  },
  {
    id: 2,
    title: "Website App",
    description:
      "A professional network platform built with React and Bootstrap, featuring a customizable dark mode and a user-friendly dashboard for managing profiles and connecting with others.",
    image: "/img/websiteapp.jpeg",
    category: "CSS",
    githubLink: "https://github.com/ecesemabekdemir/websiteApp",
    liveLink: "https://website-app-sandy.vercel.app/",
  },
];

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
            {projectsData.map((project) => (
              <div key={project} className="project-card">
                <Image
                  src={project.image}
                  alt={`Project ${project}`}
                  width={300}
                  height={200}
                  className="project-image"
                />
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    className="project-link"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Skills />
    </div>
  );
}
