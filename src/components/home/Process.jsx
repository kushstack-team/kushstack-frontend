import { FadeIn } from "../ui/FadeIn";
import { SectionLabel } from "../ui/SectionLabel";
import { useTranslation } from "react-i18next";
import "./Process.css";

const getProcess = (t) => [
  { num: "01", title: t('process.items.step1.title'),      desc: t('process.items.step1.desc') },
  { num: "02", title: t('process.items.step2.title'),   desc: t('process.items.step2.desc') },
  { num: "03", title: t('process.items.step3.title'),          desc: t('process.items.step3.desc') },
  { num: "04", title: t('process.items.step4.title'), desc: t('process.items.step4.desc') },
];

export default function Process() {
  const { t } = useTranslation();
  const processData = getProcess(t);

  return (
    <section id="process" className="process-section">
      <div className="process-container">
        <FadeIn>
          <div className="process-header">
            <SectionLabel>{t('process.label')}</SectionLabel>
            <h2 className="process-title">
              {t('process.title_1')}
              <br />
              {t('process.title_2')}
            </h2>
          </div>
        </FadeIn>

        <div className="process-grid">
          {/* Desktop connector */}
          <div className="process-connector" />
          
          {processData.map((step, i) => (
            <FadeIn key={step.num} delay={i * 0.1}>
              <div>
                <div className="process-step-num">
                  {step.num}
                </div>
                <div className="process-step-icon-box">
                  <div className="process-step-icon-inner" />
                </div>
                <h3 className="process-step-title">
                  {step.title}
                </h3>
                <p className="process-step-desc">
                  {step.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
