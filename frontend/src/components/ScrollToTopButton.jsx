
import { useEffect, useState } from "react";
import "../styles/ScrollToTop.css";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY;

      setIsVisible(scrollTop > 400);

      const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const progress =
        documentHeight > 0
          ? (scrollTop / documentHeight) * 100
          : 0;

      setScrollProgress(
        Math.min(Math.max(progress, 0), 100)
      );
    };

    window.addEventListener("scroll", updateScroll, {
      passive: true,
    });

    window.addEventListener("resize", updateScroll);

    updateScroll();

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      className={`scroll-to-top ${isVisible ? "show" : ""}`}
      onClick={scrollToTop}
      aria-label="Kembali ke atas"
      tabIndex={isVisible ? 0 : -1}
    >
      <svg
        className="scroll-progress"
        viewBox="0 0 50 50"
      >
        <defs>
          <linearGradient
            id="scrollGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#012583" />
            <stop offset="50%" stopColor="#3157C7" />
            <stop offset="100%" stopColor="#6F8CFF" />
          </linearGradient>
        </defs>

        <circle
          className="ring-background"
          cx="25"
          cy="25"
          r="21"
          pathLength="100"
        />

        <circle
          className="ring-progress"
          cx="25"
          cy="25"
          r="21"
          pathLength="100"
          style={{
            strokeDasharray: "100",
            strokeDashoffset: 100 - scrollProgress,
          }}
        />
      </svg>

      <span className="arrow">↑</span>
    </button>
  );
}
