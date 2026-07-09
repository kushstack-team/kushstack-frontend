import { Globe, Smartphone, Brain, Palette, Layers, Zap, Network, Cloud } from "lucide-react";
import { FadeIn } from "../ui/FadeIn";
import { SectionLabel } from "../ui/SectionLabel";
import { useTranslation } from "react-i18next";
import "./Services.css";

const getServices = (t) => [
  { Icon: Globe, label: t('services.items.web.label'), desc: t('services.items.web.desc') },
  { Icon: Smartphone, label: t('services.items.mobile.label'), desc: t('services.items.mobile.desc') },
  { Icon: Brain, label: t('services.items.ai.label'), desc: t('services.items.ai.desc') },
  { Icon: Palette, label: t('services.items.design.label'), desc: t('services.items.design.desc') },
  { Icon: Layers, label: t('services.items.saas.label'), desc: t('services.items.saas.desc') },
  { Icon: Zap, label: t('services.items.automation.label'), desc: t('services.items.automation.desc') },
  { Icon: Network, label: t('services.items.api.label'), desc: t('services.items.api.desc') },
  { Icon: Cloud, label: t('services.items.cloud.label'), desc: t('services.items.cloud.desc') },
];

export default function Services() {
  const { t } = useTranslation();
  const servicesData = getServices(t);

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <FadeIn>
          <div className="services-header-wrapper">
            <div>
              <SectionLabel>{t('services.label')}</SectionLabel>
              <h2 className="services-title">
                {t('services.title_1')}
                <br />
                {t('services.title_2')}
              </h2>
            </div>
            <p className="services-subtitle">
              {t('services.subtitle')}
            </p>
          </div>
        </FadeIn>

        <div className="services-grid">
          {servicesData.map(({ Icon, label, desc }, i) => (
            <FadeIn key={label} delay={i * 0.04}>
              <div className="services-card group">
                <div className="services-card-icon-box">
                  <Icon
                    style={{ width: "20px", height: "20px", color: "var(--brand-blue)" }}
                  />
                </div>
                <h3 className="services-card-title">
                  {label}
                </h3>
                <p className="services-card-desc">
                  {desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
