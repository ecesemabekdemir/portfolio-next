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
  {
    id: 6,
    title: "Quiz App",
    description:
      "A quiz application built with Next.js and CSS, featuring four categories and a customizable dark mode. The user-friendly interface allows seamless navigation between categories, enhancing the overall quiz experience.",
    image: "/img/quiz.png",
    category: "Frontend",
    githubLink: "https://github.com/ecesemabekdemir/quiz-with-next",
    liveLink: "https://quiz-with-next.vercel.app/",
  },
];

export default function Home() {
  return (
    <div>
      <div className="container">
        <Hero />
      </div>
      <div className="projects" id="projects-main">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid-main">
            {projectsData.map((project) => (
              <div key={project} className="project-card-main">
                <Image
                  src={project.image}
                  alt={`Project ${project}`}
                  width={300}
                  height={200}
                  className="project-image-main"
                />
                <div className="project-content-main">
                  <h3 className="project-title-main">{project.title}</h3>
                  <p className="project-description-main">
                    {project.description}
                  </p>
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    className="project-link-main"
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
