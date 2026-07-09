import { FadeIn } from "../ui/FadeIn";
import { useTranslation } from "react-i18next";
import "./Stats.css";

const getStats = (t) => [
  { value: t('stats.projects.value'), label: t('stats.projects.label') },
  { value: t('stats.satisfaction.value'), label: t('stats.satisfaction.label') },
  { value: t('stats.global.value'), label: t('stats.global.label') },
  { value: t('stats.experience.value'), label: t('stats.experience.label') },
];

export default function Stats() {
  const { t } = useTranslation();
  const statsData = getStats(t);

  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-grid">
          {statsData.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.06}>
              <div
                className="stats-item"
                style={{
                  borderRight: i < 3 ? "1px solid var(--border)" : "none",
                }}
              >
                <div className="stats-value">
                  {s.value}
                </div>
                <div className="stats-label">
                  {s.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
