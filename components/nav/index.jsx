import Link from "next/link";
import "./nav.css";
import MobileNav from "./mobile";
export default function Nav() {
  return (
    <>
      <div className="nav">
        <div className="container nav-content">
          <Link href="/" className="nav-logo">
            SEMA BEKDEMIR
          </Link>
          <ul className="nav-links">
            <li>
              <Link href="/home">Home</Link>
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
          <MobileNav />
        </div>
      </div>
    </>
  );
}
