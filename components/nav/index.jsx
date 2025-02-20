import Link from "next/link";
import "./nav.css";

export default function Nav() {
  return (
    <div className="nav-container">
      <div className="nav-content">
        <Link href="/" className="nav-logo">
          SEMA BEKDEMIR
        </Link>
        <input type="checkbox" id="menu-toggle" />
        <label for="menu-toggle" class="menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <ul className="nav-links">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
