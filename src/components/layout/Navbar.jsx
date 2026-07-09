import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Menu, X, Globe } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import logoImage from "../../assets/logo.png";
import "./Navbar.css";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: t('nav.home'), href: "/" },
    { label: t('nav.services'), href: "/#services" },
    { label: t('nav.work'), href: "/projects" },
    { label: t('nav.process'), href: "/#process" },
    { label: t('nav.team'), href: "/team" },
  ];

  return (
    <>
      <header
        className="navbar-header"
        style={{
          background: scrolled ? "rgba(247,248,252,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0,0,20,0.07)" : "1px solid transparent",
        }}
      >
        <div className="navbar-container">
          {/* Logo */}
          <Link to="/" className="navbar-logo-link">
            <div className="navbar-logo-wrapper">
              <img src={logoImage} alt="KushStack" />
            </div>
            <span className="navbar-logo-text">
              KushStack
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="navbar-desktop-nav">
            {navLinks.map((link) => {
              const isHome = link.href === "/";
              const isExternal = link.href.startsWith("/#");
              const isActive = location.pathname === link.href || (isHome && location.pathname === "/");

              const handleClick = (e) => {
                if (isHome && location.pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              };

              return (
                <div key={link.label} className="navbar-link-wrapper">
                  {isExternal && location.pathname === "/" ? (
                    <a
                      href={link.href.replace("/", "")}
                      className="navbar-link"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={handleClick}
                      className={`navbar-link ${isActive ? "active" : ""}`}
                    >
                      {link.label}
                    </Link>
                  )}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="navbar-link-indicator"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </div>
              );
            })}
          </nav>

          <div className="navbar-desktop-controls">
            <button
              onClick={toggleLanguage}
              className="navbar-lang-btn"
            >
              <Globe style={{ width: "16px", height: "16px" }} />
              {i18n.language === 'en' ? 'عربي' : 'EN'}
            </button>
            <div className="navbar-divider" />
            <Link
              to="/start-project"
              className="navbar-contact-link"
            >
              {t('nav.contact')}
            </Link>
            <Link
              to="/start-project"
              className="navbar-start-project-btn"
            >
              {t('nav.start_project')}
              <ArrowRight className="navbar-btn-icon" />
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="navbar-mobile-controls">
            <button
              onClick={toggleLanguage}
              className="navbar-lang-btn"
            >
              <Globe style={{ width: "16px", height: "16px" }} />
              {i18n.language === 'en' ? 'عربي' : 'EN'}
            </button>
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="navbar-menu-btn"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X style={{ width: "20px", height: "20px" }} /> : <Menu style={{ width: "20px", height: "20px" }} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="navbar-mobile-drawer"
          >
            <nav className="navbar-mobile-nav">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="navbar-mobile-link"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/start-project"
                onClick={() => setMobileOpen(false)}
                className="navbar-mobile-start-btn"
              >
                {t('nav.start_project')}
              </Link>
            </nav>
          </motion.div>
        )}
      </header>
    </>
  );
}
