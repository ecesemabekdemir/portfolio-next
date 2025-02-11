"use client";

import { useEffect, useRef } from "react";
import "./homeProject.css";
import Image from "next/image";

export default function ProjectHome() {
  const galleryRef = useRef(null);
  useEffect(() => {
    const gallery = galleryRef.current;
    let scrollAmount = 0;

    function autoScroll() {
      if (gallery) {
        gallery.scrollBy({
          left: 1, // Kaydırılacak piksel miktarı
          behavior: "smooth", // Pürüzsüz kaydırma
        });

        scrollAmount += 1;

        // Kaydırma sonuna geldiğinde başa dön
        if (scrollAmount >= gallery.scrollWidth - gallery.clientWidth) {
          scrollAmount = 0;
          gallery.scrollLeft = 0;
        }
      }
    }

    const interval = setInterval(autoScroll, 20); // 10ms'de bir çalıştır

    return () => clearInterval(interval); // Bileşen kaldırıldığında interval'i temizle
  }, []);

  return (
    <div className="gallery" ref={galleryRef}>
      <div className="card langfuse">
        <Image
          src="/img/learn.png"
          alt="Learning Image"
          width={500}
          height={300}
        />
        <div className="card-content">
          <a href="https://banner-sable.vercel.app/" target="_blank">
            Figma Banner - CSS
            <span className="arrow">›</span>
          </a>
          <div className="card-subtitle"></div>
        </div>
      </div>

      <div className="card llm-report">
        <Image
          src="/img/learn.png"
          alt="Learning Image"
          width={500}
          height={300}
        />
        <div className="card-content">
          <a href="https://banner-sable.vercel.app/" target="_blank">
            Figma Banner - CSS
            <span className="arrow">›</span>
          </a>
          <div className="card-subtitle"></div>
        </div>
      </div>

      <div className="card million">
        <Image
          src="/img/learn.png"
          alt="Learning Image"
          width={500}
          height={300}
        />
        <div className="card-content">
          <a href="https://banner-sable.vercel.app/" target="_blank">
            Figma Banner - CSS
            <span className="arrow">›</span>
          </a>
          <div className="card-subtitle"></div>
        </div>
      </div>

      <div className="card querylab">
        <Image
          src="/img/learn.png"
          alt="Learning Image"
          width={500}
          height={300}
        />
        <div className="card-content">
          <a href="https://banner-sable.vercel.app/" target="_blank">
            Figma Banner - CSS
            <span className="arrow">›</span>
          </a>
          <div className="card-subtitle">Bootstrapped</div>
        </div>
      </div>
      <div className="card querylab">
        <Image
          src="/img/learn.png"
          alt="Learning Image"
          width={500}
          height={300}
        />
        <div className="card-content">
          <a href="https://banner-sable.vercel.app/" target="_blank">
            Figma Banner - CSS
            <span className="arrow">›</span>
          </a>
          <div className="card-subtitle">Bootstrapped</div>
        </div>
      </div>
      <div className="card querylab">
        <Image
          src="/img/learn.png"
          alt="Learning Image"
          width={500}
          height={300}
        />
        <div className="card-content">
          <a href="https://banner-sable.vercel.app/" target="_blank">
            Figma Banner - CSS
            <span className="arrow">›</span>
          </a>
          <div className="card-subtitle">Bootstrapped</div>
        </div>
      </div>
      <div className="card querylab">
        <Image
          src="/img/learn.png"
          alt="Learning Image"
          width={500}
          height={300}
        />
        <div className="card-content">
          <a href="https://banner-sable.vercel.app/" target="_blank">
            Figma Banner - CSS
            <span className="arrow">›</span>
          </a>
          <div className="card-subtitle">Bootstrapped</div>
        </div>
      </div>
      <div className="card querylab">
        <Image
          src="/img/learn.png"
          alt="Learning Image"
          width={500}
          height={300}
        />
        <div className="card-content">
          <a href="https://banner-sable.vercel.app/" target="_blank">
            Figma Banner - CSS
            <span className="arrow">›</span>
          </a>
          <div className="card-subtitle">Bootstrapped</div>
        </div>
      </div>
    </div>
  );
}
