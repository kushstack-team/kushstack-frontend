import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { getProjectsData } from "./Projects";
import { FadeIn } from "../components/ui/FadeIn";
import { useTranslation } from "react-i18next";
import "./ProjectDetails.css";

export default function ProjectDetails() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const projectsData = getProjectsData(t);
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="project-details-not-found">
        <div className="project-details-not-found-content">
          <h1 className="project-details-not-found-title">Project Not Found</h1>
          <Link to="/projects" className="project-details-not-found-link">Return to Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="project-details-main">
      {/* Hero Section */}
      <div 
        className="project-details-hero"
        style={{
          background: `linear-gradient(135deg, ${project.gradA}, ${project.gradB})`,
        }}
      >
        <div className="project-details-container">
          <Link to="/projects" className="project-details-back" style={{ color: project.accent }}>
            <ArrowLeft className="project-details-back-icon" /> Back to Projects
          </Link>
          <FadeIn>
            <div 
              className="project-details-tag"
              style={{ color: project.accent }}
            >
              {project.tag}
            </div>
            <h1 className="project-details-title">
              {project.title}
            </h1>
            <p className="project-details-desc">
              {project.desc}
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Main Content */}
      <div className="project-details-content-container">
        <div className="project-details-grid">
          <div className="project-details-main-col">
            <FadeIn delay={0.1}>
              <h2 className="project-details-section-title">Overview</h2>
              <p className="project-details-paragraph">
                This project represents a complete architectural rethinking of how data is processed and delivered to the end-user. By leveraging modern cloud infrastructure and an optimized frontend, we managed to drastically reduce latency while improving overall system reliability and user satisfaction.
              </p>

              <h2 className="project-details-section-title">The Problem</h2>
              <p className="project-details-paragraph">
                Legacy systems were struggling to keep up with the increasing volume of concurrent users. Response times were degrading during peak hours, and the existing monolithic architecture made shipping new features incredibly slow and risky.
              </p>

              <h2 className="project-details-section-title">The Solution</h2>
              <ul className="project-details-list">
                {[
                  "Migrated to a highly scalable microservices architecture.",
                  "Implemented edge caching to reduce database load by 70%.",
                  "Redesigned the core user interface for improved accessibility and speed.",
                  "Established automated CI/CD pipelines reducing deployment time to minutes."
                ].map((item, i) => (
                  <li key={i} className="project-details-list-item">
                    <CheckCircle className="project-details-list-icon" style={{ color: project.accent }} />
                    <span className="project-details-list-text">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          {/* Sidebar */}
          <div className="project-details-sidebar">
            <FadeIn delay={0.2}>
              <div className="project-details-sidebar-box">
                <h3 className="project-details-sidebar-title">Technologies Used</h3>
                <div className="project-details-tech-list">
                  {project.tech.map((t) => (
                    <span 
                      key={t}
                      className="project-details-tech-item"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-details-sidebar-bottom">
                  <h3 className="project-details-metric-label">Key Metric</h3>
                  <div className="project-details-metric-value" style={{ color: project.accent }}>
                    {project.metric}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </main>
  );
}
