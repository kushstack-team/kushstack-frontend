import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import "./Hero.css";

const TECHS = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL",
  "AWS", "Docker", "Kubernetes", "Figma", "Supabase", "OpenAI",
  "Redis", "GraphQL", "Tailwind CSS", "React Native", "Vercel", "Prisma",
];

export default function Hero() {
  const [highlights, setHighlights] = useState(new Set([1, 6, 13]));

  useEffect(() => {
    const tick = () => {
      const next = new Set();
      while (next.size < 3) next.add(Math.floor(Math.random() * TECHS.length));
      setHighlights(next);
    };
    const id = setInterval(tick, 1700);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero-section" style={{ minHeight: "100vh" }}>
      {/* Giant Background Text */}
      <div className="hero-bg-text-wrapper" style={{ overflow: "hidden" }}>
        <h1
          className="hero-giant-text"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(5rem, 21vw, 28rem)",
            color: "var(--brand-blue)",
            opacity: 0.09,
            whiteSpace: "nowrap",
            userSelect: "none"
          }}
        >
          KushStack
        </h1>
      </div>

      {/* Subtle background effects */}
      <div className="hero-bg-decor-wrapper">
        <div
          className="hero-bg-dots"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(20,120,245,0.09) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div
          className="hero-bg-glow-top"
          style={{
            top: "-5rem", right: 0, width: "100%", height: "600px",
            background: "radial-gradient(ellipse at top right, rgba(20,120,245,0.09) 0%, transparent 65%)",
          }}
        />
        <div
          className="hero-bg-glow-bottom"
          style={{
            left: "-10rem", width: "100%", height: "400px",
            background: "radial-gradient(ellipse at bottom left, rgba(20,120,245,0.06) 0%, transparent 60%)",
          }}
        />
        <div
          className="hero-bg-fade"
          style={{
            height: "10rem",
            width:"100%",
            background: "linear-gradient(to bottom, transparent, var(--background))",
          }}
        />
      </div>

      <div className="hero-container">
        {/* ── LEFT ── */}
        <div className="hero-content-left">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="hero-badge"
            style={{
              border: "1px solid rgba(20,120,245,0.2)",
              background: "rgba(20,120,245,0.05)",
              padding:"8px 15px"
            }}
          >
            <div
              className="hero-badge-dot"
              style={{ background: "#22c55e", width: "6px", height: "6px" }}
            />
            <span
              className="hero-badge-text"
              style={{ fontFamily: "var(--font-mono)", color: "var(--brand-blue)", fontSize: "11px" }}
            >
              Accepting new projects · 50+ clients served
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.07 }}
            className="hero-title"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.8rem, 6vw, 4.6rem)", lineHeight: 1.03 }}
          >
            Building Digital
            <br />
            Products That
            <br />
            <span
              style={{
                background: `linear-gradient(135deg, var(--brand-blue-mid) 0%, var(--brand-blue) 50%, var(--brand-blue-dark) 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Move Businesses
            </span>
            <br />
            Forward.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
            className="hero-description"
            style={{ fontSize: "1.06rem", maxWidth: "32rem" }}
          >
            We design and engineer custom web apps, mobile products, and AI
            systems for businesses that demand precision, speed, and lasting
            results.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.26 }}
            className="hero-cta-wrapper"
          >
            <Link
              to="/start-project"
              className="hero-cta-primary"
              style={{
                padding: "14px 28px",
                borderRadius: "12px",
                fontSize: "14px",
                background: `linear-gradient(135deg, var(--brand-blue), var(--brand-blue-dark))`,
                boxShadow: `0 6px 20px rgba(20,120,245,0.32)`,
              }}
            >
              Start a Project
              <ArrowRight className="hero-cta-icon" style={{ width: "16px", height: "16px" }} />
            </Link>
            <Link
              to="/projects"
              className="hero-cta-secondary"
              style={{
                border: "1px solid rgba(0,0,20,0.12)",
                padding: "14px 28px",
                borderRadius: "12px",
                fontSize: "14px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.boxShadow = "0 1px 2px rgba(0,0,0,0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              View Our Work
            </Link>
          </motion.div>

          {/* Trust signal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hero-trust-wrapper"
          >
            <div className="hero-trust-avatars" style={{ marginLeft: "8px" }}>
              {[
                { i: "MC", bg: "#1478f5" },
                { i: "PN", bg: "#0891b2" },
                { i: "JO", bg: "#7c3aed" },
              ].map(({ i, bg }, idx) => (
                <div
                  key={i}
                  className="hero-trust-avatar"
                  style={{
                    width: "28px", height: "28px", borderRadius: "50%",
                    border: "2px solid var(--background)", background: bg,
                    fontSize: "9px", marginLeft: "-8px", zIndex: 3 - idx
                  }}
                >
                  {i}
                </div>
              ))}
            </div>
            <p className="hero-trust-text" style={{ fontSize: "12.5px" }}>
              Trusted by{" "}
              <span className="hero-trust-text-highlight">50+ clients</span>{" "}
              worldwide
            </p>
          </motion.div>
        </div>

        {/* ── RIGHT: Tech Matrix ── */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="hero-matrix-wrapper"
        >
          <div
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              background: "#ffffff",
              border: "1px solid rgba(0,0,20,0.08)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06), 0 20px 60px rgba(20,120,245,0.08)",
            }}
          >
            {/* Window chrome */}
            <div
              className="hero-matrix-header"
              style={{
                background: "#f7f8fc",
                borderColor: "rgba(0,0,20,0.07)",
              }}
            >
              <div className="hero-matrix-dots">
                <div className="hero-matrix-dot" style={{ background: "#fca5a5" }} />
                <div className="hero-matrix-dot" style={{ background: "#fcd34d" }} />
                <div className="hero-matrix-dot" style={{ background: "#86efac" }} />
              </div>
              <span
                className="hero-matrix-title"
                style={{ fontFamily: "var(--font-mono)", color: "#9ca3af", fontSize: "10px" }}
              >
                stack.config.ts
              </span>
              <div style={{ width: "64px" }} />
            </div>

            <div className="hero-matrix-body">
              <p
                className="hero-matrix-comment"
                style={{ fontFamily: "var(--font-mono)", color: "#9ca3af", fontSize: "10px" }}
              >
                // full-stack technology coverage
              </p>
              <div className="hero-matrix-grid">
                {TECHS.map((tech, i) => (
                  <div
                    key={tech}
                    className="hero-matrix-item"
                    style={{
                      padding: "6px 8px", borderRadius: "8px", fontSize: "11px",
                      fontFamily: "var(--font-mono)",
                      background: highlights.has(i) ? "rgba(20,120,245,0.1)" : "#f3f4f8",
                      color: highlights.has(i) ? "var(--brand-blue)" : "#9ca3af",
                      border: highlights.has(i) ? "1px solid rgba(20,120,245,0.25)" : "1px solid transparent",
                      boxShadow: highlights.has(i) ? "0 0 10px rgba(20,120,245,0.12)" : "none",
                    }}
                  >
                    {tech}
                  </div>
                ))}
              </div>

              {/* Coverage bar */}
              <div
                className="hero-matrix-coverage-wrapper"
                style={{ borderColor: "rgba(0,0,20,0.07)" }}
              >
                <div className="hero-matrix-coverage-header">
                  <span
                    style={{ fontFamily: "var(--font-mono)", color: "#9ca3af", fontSize: "10px" }}
                  >
                    stack.coverage
                  </span>
                  <span
                    className="hero-matrix-coverage-value"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--brand-blue)", fontSize: "10px" }}
                  >
                    full-stack · 94%
                  </span>
                </div>
                <div
                  style={{ height: "6px", borderRadius: "9999px", overflow: "hidden", background: "#edf0f8" }}
                >
                  <div
                    style={{
                      height: "100%", borderRadius: "9999px",
                      width: "94%",
                      background: `linear-gradient(90deg, var(--brand-blue-mid), var(--brand-blue))`,
                    }}
                  />
                </div>
              </div>

              {/* Status indicator */}
              <div className="hero-matrix-status">
                <div
                  className="hero-matrix-status-dot"
                  style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22c55e" }}
                />
                <span
                  style={{ fontFamily: "var(--font-mono)", color: "#9ca3af", fontSize: "10px" }}
                >
                  ready_to_deploy
                  <span className="cursor ml-0.5" style={{ color: "var(--brand-blue)", marginLeft: "2px" }}>▮</span>
                </span>
              </div>
            </div>
          </div>

          {/* Floating stat cards */}
          <div className="hero-stats-grid">
            {[
              { label: "Avg delivery", value: "8 weeks", icon: "⚡" },
              { label: "Code quality", value: "A+  rated", icon: "✦" },
            ].map((card) => (
              <div
                key={card.label}
                className="hero-stat-card"
                style={{
                  padding: "12px 16px", borderRadius: "12px",
                  background: "#ffffff",
                  border: "1px solid rgba(0,0,20,0.08)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                }}
              >
                <span style={{ fontSize: "18px" }}>{card.icon}</span>
                <div>
                  <div
                    className="hero-stat-label"
                    style={{ fontFamily: "var(--font-mono)", color: "#9ca3af", fontSize: "10px" }}
                  >
                    {card.label}
                  </div>
                  <div
                    className="hero-stat-value"
                    style={{ fontFamily: "var(--font-display)", color: "var(--brand-blue)", fontSize: "13px" }}
                  >
                    {card.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
