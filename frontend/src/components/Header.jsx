import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isNavActive, setIsNavActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Menggunakan useLocation dari react-router-dom untuk mendapatkan path saat ini
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/products", label: "Product & Programs" },
    { href: "/insight", label: "Insight" },
    { href: "/community", label: "Community" },
    { href: "/contact", label: "Contact", dropdown: true },
  ];

  return (
    <header className={isScrolled ? "scrolled" : ""}>
      <div className="container header-inner">
        {/* LOGO KIRI */}
        <Link to="/" className="logo-header">
          <img
            src="/img/logo.svg"
            alt="1st Step Journey"
            width={120}
            height={45}
            className="logo-img"
          />
        </Link>

        {/* NAVIGASI TENGAH (YELLOW PILL) */}
        <nav className={`main-nav ${isNavActive ? "active" : ""}`}>
          <ul className="pill-nav">
            {navItems.map((item) => (
              <li
                key={item.href}
                className={item.dropdown ? "nav-dropdown" : ""}
              >
                <Link
                  to={item.href}
                  className={`nav-link ${pathname === item.href ? "active" : ""}`}
                  onClick={() => setIsNavActive(false)}
                >
                  {item.label}
                  {item.dropdown && (
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="dropdown-icon"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* PROFIL KANAN */}
        <Link to="/profile" className="profile-section">
          <img
            src="/img/profil.svg"
            alt="Profile"
            width={45}
            height={45}
            className="profile-pic"
          />
          <span className="profile-text">Profile</span>
        </Link>

        {/* HAMBURGER MENU (MOBILE) */}
        <button
          className="hamburger"
          onClick={() => setIsNavActive(!isNavActive)}
          aria-label="Toggle menu"
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </header>
  );
}
