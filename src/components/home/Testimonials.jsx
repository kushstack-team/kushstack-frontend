import { useState, useEffect } from "react";
import { Quote } from "lucide-react";
import { FadeIn } from "../ui/FadeIn";
import { SectionLabel } from "../ui/SectionLabel";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import "./Testimonials.css";

const getTestimonials = (t) => [
  {
    quote: t('testimonials.data.t1.quote'),
    name: t('testimonials.data.t1.name'),
    role: t('testimonials.data.t1.role'),
    initials: "MC",
    avatarBg: "#1478f5",
  },
  {
    quote: t('testimonials.data.t2.quote'),
    name: t('testimonials.data.t2.name'),
    role: t('testimonials.data.t2.role'),
    initials: "PN",
    avatarBg: "#0891b2",
  },
  {
    quote: t('testimonials.data.t3.quote'),
    name: t('testimonials.data.t3.name'),
    role: t('testimonials.data.t3.role'),
    initials: "JO",
    avatarBg: "#7c3aed",
  },
];

export default function Testimonials() {
  const { t } = useTranslation();
  const testimonialsData = getTestimonials(t);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="testimonials-section">
      {/* Background Decor */}
      <div className="testimonials-decor-wrapper" style={{ transform: "translate(30%, -20%)" }}>
        <Quote style={{ width: "400px", height: "400px", color: "var(--brand-blue)" }} />
      </div>

      <div className="testimonials-container">
        <FadeIn>
          <div className="testimonials-header">
            <SectionLabel>{t('testimonials.label')}</SectionLabel>
            <h2 className="testimonials-title">
              {t('testimonials.title')}
            </h2>
          </div>
        </FadeIn>

        <div className="testimonials-grid">
          {/* Main Testimonial Display */}
          <div className="testimonials-display">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="testimonials-card"
              >
                <div className="testimonials-quote-wrapper">
                  <Quote className="testimonials-quote-icon" style={{ width: "48px", height: "48px", color: "var(--brand-blue)" }} />
                  <p className="testimonials-quote-text">
                    "{testimonialsData[activeIndex].quote}"
                  </p>
                </div>

                <div className="testimonials-author">
                  <div
                    className="testimonials-author-avatar"
                    style={{
                      background: testimonialsData[activeIndex].avatarBg,
                    }}
                  >
                    {testimonialsData[activeIndex].initials}
                  </div>
                  <div>
                    <div className="testimonials-author-name">
                      {testimonialsData[activeIndex].name}
                    </div>
                    <div className="testimonials-author-role">
                      {testimonialsData[activeIndex].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicators / Selector */}
          <div className="testimonials-indicators">
            {testimonialsData.map((testimonial, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className="testimonials-indicator-btn group"
                style={{
                  borderColor: activeIndex === i ? "var(--brand-blue)" : "rgba(0,0,20,0.08)",
                  background: activeIndex === i ? "var(--card)" : "transparent",
                  opacity: activeIndex === i ? 1 : 0.6,
                  boxShadow: activeIndex === i ? "0 4px 20px rgba(20,120,245,0.08)" : "none",
                }}
              >
                <div className="testimonials-indicator-name">{testimonial.name}</div>
                <div className="testimonials-indicator-role">{testimonial.role}</div>
                {/* Progress bar effect on active */}
                {activeIndex === i && (
                  <motion.div
                    className="testimonials-progress-bar"
                    style={{ background: "var(--brand-blue)" }}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 6, ease: "linear" }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
