export default function Nav() {
  return (
    <>
      <div className="nav">
        <div className="container nav-content">
          <a href="#" className="nav-logo">
            SEMA BEKDEMIR
          </a>
          <ul className="nav-links">
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
