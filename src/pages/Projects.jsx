import { Link } from "react-router-dom";
import { FadeIn } from "../components/ui/FadeIn";
import { SectionLabel } from "../components/ui/SectionLabel";
import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import "./Projects.css";

export const getProjectsData = (t) => [
  {
    slug: "finova-analytics",
    tag: t('projects.data.finova-analytics.tag'),
    title: t('projects.data.finova-analytics.title'),
    desc: t('projects.data.finova-analytics.desc'),
    tech: ["Next.js", "Python", "PostgreSQL", "AWS"],
    metric: t('projects.data.finova-analytics.metric'),
    accent: "#1060e0",
    gradA: "rgba(16,96,224,0.12)",
    gradB: "rgba(20,120,245,0.06)",
  },
  {
    slug: "shipfast-network",
    tag: t('projects.data.shipfast-network.tag'),
    title: t('projects.data.shipfast-network.title'),
    desc: t('projects.data.shipfast-network.desc'),
    tech: ["React Native", "Node.js", "Redis", "Maps API"],
    metric: t('projects.data.shipfast-network.metric'),
    accent: "#0891b2",
    gradA: "rgba(8,145,178,0.12)",
    gradB: "rgba(6,182,212,0.05)",
  },
  {
    slug: "loyaltygrid-intelligence",
    tag: t('projects.data.loyaltygrid-intelligence.tag'),
    title: t('projects.data.loyaltygrid-intelligence.title'),
    desc: t('projects.data.loyaltygrid-intelligence.desc'),
    tech: ["Python", "OpenAI API", "Supabase", "React"],
    metric: t('projects.data.loyaltygrid-intelligence.metric'),
    accent: "#6d28d9",
    gradA: "rgba(109,40,217,0.12)",
    gradB: "rgba(124,58,237,0.05)",
  },
];

export default function Projects() {
  const { t } = useTranslation();
  const projectsData = getProjectsData(t);

  return (
    <main className="projects-main">
      <div className="projects-container">
        {/* Header */}
        <div className="projects-header-wrapper">
          <FadeIn>
            <SectionLabel>{t('projects.label')}</SectionLabel>
            <h1 className="projects-title">
              {t('projects.title').split(' ').map((word, i, arr) => (
                <span key={i}>
                  {word}{" "}
                  {i === Math.floor(arr.length / 2) - 1 && <br />}
                </span>
              ))}
            </h1>
            <p className="projects-subtitle">
              {t('projects.subtitle')}
            </p>
          </FadeIn>
        </div>

        {/* Projects Showcase */}
        <div className="projects-list">
          {projectsData.map((project, idx) => (
            <FadeIn key={project.slug} delay={0.1}>
              <Link
                to={`/projects/${project.slug}`}
                className="projects-card group"
              >
                {/* Visual Side */}
                <div
                  className="projects-card-visual"
                  style={{
                    background: `linear-gradient(135deg, ${project.gradA}, ${project.gradB})`,
                  }}
                >
                  <div
                    className="projects-card-glow"
                    style={{
                      background: `radial-gradient(circle at center, ${project.accent}20 0%, transparent 70%)`
                    }}
                  />
                  {/* Abstract placeholder for the project UI */}
                  <div className="projects-card-mockup">
                    <div className="projects-card-mockup-chrome">
                      <div className="projects-mockup-dot red" />
                      <div className="projects-mockup-dot amber" />
                      <div className="projects-mockup-dot green" />
                    </div>
                    <div className="projects-card-mockup-body">
                      <div className="projects-mockup-el line-short" />
                      <div className="projects-mockup-el box" />
                      <div className="projects-mockup-el line-long" />
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="projects-card-content">
                  <div
                    className="projects-card-tag"
                    style={{ color: project.accent, background: `${project.accent}15` }}
                  >
                    {project.tag}
                  </div>
                  <h2 className="projects-card-title">
                    {project.title}
                  </h2>
                  <p className="projects-card-desc">
                    {project.desc}
                  </p>

                  <div className="projects-card-tech-list">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="projects-card-tech-item"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="projects-card-link">
                    {t('projects.read_case_study')} <ArrowUpRight className="projects-card-link-icon rtl-arrow" />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </main>
  );
}
