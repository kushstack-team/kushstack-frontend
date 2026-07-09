import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import "./NotFound.css";

export default function NotFound() {
  return (
    <main className="not-found-main">
      <div className="not-found-container">
        <h1 className="not-found-error-code">
          404
        </h1>
        <h2 className="not-found-title">
          Page not found
        </h2>
        <p className="not-found-desc">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/"
          className="not-found-link"
          style={{ background: `linear-gradient(135deg, var(--brand-blue), var(--brand-blue-dark))` }}
        >
          <ArrowLeft className="not-found-icon rtl-arrow" /> Return Home
        </Link>
      </div>
    </main>
  );
}
