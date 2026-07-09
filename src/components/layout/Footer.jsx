import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logoImage from "../../assets/logo.png";
import "./Footer.css";

export default function Footer() {
  const { t } = useTranslation();
  const FOOTER_SERVICES = [
    "Web Applications", "Mobile Development", "AI Solutions",
    "UI/UX Design", "SaaS Development", "Cloud Solutions",
  ];

  const FOOTER_COMPANY = [
    { label: "Work", href: "/projects" },
    { label: "Team", href: "/team" },
    { label: "Start a Project", href: "/start-project" }
  ];

  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-logo-col">
            <Link to="/" className="footer-logo-link">
              <div className="footer-logo-icon">
                <img src={logoImage} alt="KushStack" />
              </div>
              <span className="footer-logo-text">
                KushStack
              </span>
            </Link>
            <p className="footer-description">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h4 className="footer-col-title">{t('footer.services_title')}</h4>
            <ul className="footer-list">
              {FOOTER_SERVICES.map(s => (
                <li key={s}>
                  <span className="footer-link cursor-default">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">{t('footer.company_title')}</h4>
            <ul className="footer-list">
              {FOOTER_COMPANY.map(l => (
                <li key={l.label}>
                  <Link to={l.href} className="footer-link">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p className="footer-copyright">© {new Date().getFullYear()} {t('footer.rights')}</p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">{t('footer.privacy')}</a>
            <a href="#" className="footer-bottom-link">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
