import Skills from "@/components/skills";

export default function PortfolioPage() {
  return (
    <>
      <div className="portfolioContainer">
        <div className="portfolioHeader">
          <div className="titleText">
            <h1>I’m a Frontend Developer</h1>
            <h3>
              independent creator, and a digital nomad living on the internet. I
              love creating modern, user-friendly experiences with web
              technologies and design. With each project, I strive to improve
              myself, combining design and code to bring unique creations to
              life.
            </h3>
          </div>
          <div className="img">
            <img src={"./img/user.png"} alt="" />
          </div>
        </div>
        <Skills />
      </div>
    </>
  );
}
