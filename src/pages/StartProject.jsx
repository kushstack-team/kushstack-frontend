import { useState } from "react";
import { FadeIn } from "../components/ui/FadeIn";
import { SectionLabel } from "../components/ui/SectionLabel";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { generateWhatsAppLink } from "../utils/whatsapp";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import "./StartProject.css";

const PROJECT_TYPES = [
  "Website", "Mobile App", "SaaS", "AI Solution",
  "Dashboard", "E-commerce", "Branding", "Automation", "API", "Other"
];

const BUDGETS = [
  "Under $5k", "$5k - $15k", "$15k - $50k", "$50k+"
];

const TIMELINES = [
  "ASAP (< 1 month)", "1-3 months", "3-6 months", "Flexible"
];

export default function StartProject() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: "",
    name: "",
    email: "",
    company: "",
    role: "",
    goals: "",
    budget: "",
    timeline: "",
    features: [],
    existingWebsite: "",
    additionalNotes: ""
  });
  const { t } = useTranslation();

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < totalSteps) {
      handleNext();
      return;
    }
    const link = generateWhatsAppLink("250794101251", formData);
    window.open(link, "_blank");
  };

  const updateData = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const toggleFeature = (feature) => {
    setFormData(prev => {
      const exists = prev.features.includes(feature);
      return {
        ...prev,
        features: exists ? prev.features.filter(f => f !== feature) : [...prev.features, feature]
      };
    });
  };

  // Helper to generate a rough estimate text
  const getEstimate = () => {
    if (!formData.projectType || !formData.budget) return "Provide details for estimate";
    if (formData.budget === "Under $5k") return "Est. $3k - $5k";
    if (formData.budget === "$5k - $15k") return "Est. $8k - $15k";
    if (formData.budget === "$15k - $50k") return "Est. $20k - $45k";
    return "Custom Enterprise Pricing";
  };

  return (
    <main className="start-project-main">
      <div className="start-project-container">
        <div className="start-project-header">
          <SectionLabel>{t('form.label')}</SectionLabel>
          <h1 className="start-project-title">
            {t('form.title')}
          </h1>

          {/* Progress Bar */}
          <div className="start-project-progress-wrapper">
            <motion.div
              className="start-project-progress-fill"
              style={{ background: "var(--brand-blue)" }}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="start-project-progress-texts">
            <span>{t('form.step')} {step} {t('form.of')} {totalSteps}</span>
            <span>{Math.round(progress)}% {t('form.complete')}</span>
          </div>
        </div>

        <div className="start-project-card">
          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="start-project-step"
                >
                  <h2 className="start-project-step-title">{t('form.step1_title')}</h2>
                  <div className="start-project-type-grid">
                    {PROJECT_TYPES.map(type => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => updateData("projectType", type)}
                        className="start-project-type-btn"
                        style={{
                          borderColor: formData.projectType === type ? "var(--brand-blue)" : "var(--border)",
                          background: formData.projectType === type ? "rgba(20,120,245,0.05)" : "var(--background)",
                          color: formData.projectType === type ? "var(--brand-blue)" : "var(--foreground)",
                          fontWeight: formData.projectType === type ? 600 : 500
                        }}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="start-project-step"
                >
                  <h2 className="start-project-step-title">{t('form.step2_title')}</h2>
                  <div className="start-project-info-grid">
                    <div>
                      <label className="start-project-label">{t('form.name')}</label>
                      <input
                        type="text"
                        required
                        className="start-project-input"
                        value={formData.name}
                        onChange={e => updateData("name", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="start-project-label">{t('form.email')}</label>
                      <input
                        type="email"
                        required
                        className="start-project-input"
                        value={formData.email}
                        onChange={e => updateData("email", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="start-project-label">{t('form.company')}</label>
                      <input
                        type="text"
                        className="start-project-input"
                        value={formData.company}
                        onChange={e => updateData("company", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="start-project-label">{t('form.role')}</label>
                      <input
                        type="text"
                        className="start-project-input"
                        value={formData.role}
                        onChange={e => updateData("role", e.target.value)}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="start-project-step"
                >
                  <h2 className="start-project-step-title">{t('form.step3_title')}</h2>
                  <div>
                    <label className="start-project-label">{t('form.goals')}</label>
                    <textarea
                      rows={5}
                      className="start-project-textarea"
                      placeholder={t('form.goals_placeholder')}
                      value={formData.goals}
                      onChange={e => updateData("goals", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="start-project-label">{t('form.existing_website')}</label>
                    <input
                      type="text"
                      className="start-project-input"
                      value={formData.existingWebsite}
                      onChange={e => updateData("existingWebsite", e.target.value)}
                    />
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="start-project-step"
                >
                  <h2 className="start-project-step-title">{t('form.step4_title')}</h2>

                  <div className="start-project-options-grid">
                    <div>
                      <label className="start-project-options-label">{t('form.budget')}</label>
                      <div className="start-project-radio-group">
                        {BUDGETS.map(b => (
                          <label key={b} className="start-project-radio-label">
                            <input
                              type="radio"
                              name="budget"
                              checked={formData.budget === b}
                              onChange={() => updateData("budget", b)}
                              className="start-project-radio-input"
                            />
                            <span className="start-project-radio-text">{b}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="start-project-options-label">{t('form.timeline')}</label>
                      <div className="start-project-radio-group">
                        {TIMELINES.map(t => (
                          <label key={t} className="start-project-radio-label">
                            <input
                              type="radio"
                              name="timeline"
                              checked={formData.timeline === t}
                              onChange={() => updateData("timeline", t)}
                              className="start-project-radio-input"
                            />
                            <span className="start-project-radio-text">{t}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="start-project-options-label">{t('form.features')}</label>
                    <div className="start-project-features-grid">
                      {["Authentication", "Payments", "CMS", "Admin Dashboard", "Chat / Messaging", "Search", "Map / Location", "Analytics", "Multi-language"].map(f => (
                        <label key={f} className="start-project-feature-label">
                          <input
                            type="checkbox"
                            checked={formData.features.includes(f)}
                            onChange={() => toggleFeature(f)}
                            className="start-project-feature-checkbox"
                          />
                          <span className="start-project-feature-text">{f}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="start-project-footer">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="start-project-back-btn"
                >
                  <ArrowLeft className="start-project-btn-icon rtl-arrow" /> {t('form.back')}
                </button>
              ) : (
                <div />
              )}

              <div className="start-project-controls">
                {step === totalSteps && (
                  <div className="start-project-estimate">
                    {getEstimate()}
                  </div>
                )}

                {step < totalSteps ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={step === 1 && !formData.projectType}
                    className="start-project-next-btn"
                    style={{ background: `linear-gradient(135deg, var(--brand-blue), var(--brand-blue-dark))` }}
                  >
                    {t('form.next')} <ArrowRight className="start-project-btn-icon rtl-arrow" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="start-project-submit-btn"
                    style={{
                      background: `linear-gradient(135deg, var(--brand-blue), var(--brand-blue-dark))`,
                      boxShadow: `0 4px 14px rgba(20,120,245,0.3)`
                    }}
                  >
                    {t('form.submit')} <Check className="start-project-btn-icon" />
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
