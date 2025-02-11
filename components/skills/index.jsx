"use client";
export default function Skills() {
  return (
    <>
      <section className="skills" id="skills">
        <div className="container">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="skills-grid">
            {[
              "Frontend Development",
              "Responsive Design",
              "UI/UX Design",
              "React & Next.js",
              "JavaScript/TypeScript",
              "CSS & Animation",
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
