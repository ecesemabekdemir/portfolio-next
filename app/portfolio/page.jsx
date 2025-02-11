import ProjectHome from "@/components/home-project";
import Skills from "@/components/skills";
import Image from "next/image";

export default function PortfolioPage() {
  return (
    <>
      <div>
        <div className="hero">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">
                SEMA
                <br />
                BEKDEMIR
              </h1>
              <div className="hero-image">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Sema Bekdemir"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="featured-section">
          <div className="container">
            <p className="mission-statement">
              A frontend developer passionate about creating modern,
              user-friendly, and responsive websites. Combining design and
              development to build outstanding web experiences.
            </p>
            <div className="logos">
              {/* Replace with your featured logos/work */}
              <Image
                src="/placeholder.svg?height=50&width=100"
                alt="Featured Work 1"
                width={100}
                height={50}
              />
              <Image
                src="/placeholder.svg?height=50&width=100"
                alt="Featured Work 2"
                width={100}
                height={50}
              />
              <Image
                src="/placeholder.svg?height=50&width=100"
                alt="Featured Work 3"
                width={100}
                height={50}
              />
            </div>
          </div>
        </div>

        <div className="roles-section">
          <div className="container">
            <div className="roles-list">
              <div>FRONTEND DEVELOPER</div>
              <div>UI DESIGNER</div>
              <div>PROBLEM SOLVER</div>
              <div>CREATIVE THINKER</div>
            </div>
          </div>
        </div>

        <div className="about-section" id="about">
          <div className="container">
            <h2 className="about-title">MEET SEMA</h2>
            <p>
              With a unique background in interior architecture and construction
              technology, I bring a distinctive perspective to frontend
              development. My journey from design to code has equipped me with a
              keen eye for detail and a deep understanding of user experience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
