"use client";
export default function Skills() {
  return (
    <>
      <section className="skills" id="skills">
        <div className="container">
          <h2 className="section-title">Skills &amp; Expertise</h2>
          <div className="skills-grid">
            {[
              "Frontend Development",
              "Responsive Design",
              "React ",
              "Next.js",
              "JavaScript",
              "CSS ",
              "Animation",
              "Typescript",
            ].map((skill) => (
              <div key={skill} className="skill-card">
                <div className="skill-icon">⚡</div>
                <h3>{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
