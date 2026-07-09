import "./SectionLabel.css";

export function SectionLabel({ children }) {
  return (
    <span className="section-label">
      <span className="section-label-line" />
      {children}
    </span>
  );
}
