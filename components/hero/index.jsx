"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <>
      <div className="hero">
        <div className={`hero-content ${isVisible ? "animate" : ""}`}>
          <h1 className="hero-title">Frontend Developer</h1>
          <h2 className="hero-subtitle">Creating Modern Web Experiences</h2>
          <p className="hero-description">
            Hello! I&apos;m Ece Sema Bekdemir, a software developer and web
            developer. I love dancing with code and creating new things in the
            digital world. This website is a window into my world. Here, you can
            find my software projects, thoughts on technology, and learn more
            about me.
          </p>
        </div>
        <div className="hero-image-container">
          <div className="hero-image">
            <Image
              src="/img/user.png"
              alt="Sema Bekdemir"
              width={450}
              height={450}
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
}
