import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <>
      <section className="contact" id="contact">
        <div className="container">
          <div className="contact-content">
            <h2 className="contact-title">Let&apos;s Connect</h2>
            <p className="contact-description">
              I&apos;m always interested in hearing about new projects and
              opportunities.
            </p>
            <div className="social-links">
              <a
                href="https://github.com/ecesemabekdemir"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github />
              </a>
              <a
                href="https://www.linkedin.com/in/ecesemabekdemir/"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin />
              </a>
              <a href="mailto:your.email@example.com" className="social-link">
                <Mail />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
