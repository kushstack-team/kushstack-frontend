import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Code, BrainCircuit } from "lucide-react";

const Linkedin = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const Github = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>;
import { getTeamMembers } from "./Team";
import { FadeIn } from "../components/ui/FadeIn";
import "./TeamMember.css";

export default function TeamMember() {
  const { member } = useParams();
  const teamMembersData = getTeamMembers();
  const person = teamMembersData.find((p) => p.id === member);

  if (!person) {
    return (
      <div className="team-member-not-found">
        <div className="team-member-not-found-content">
          <h1 className="team-member-not-found-title">Member Not Found</h1>
          <Link to="/team" className="team-member-not-found-link">Return to Team</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="team-member-main">
      <div className="team-member-container">
        <Link to="/team" className="team-member-back">
          <ArrowLeft className="team-member-back-icon" /> Back to Team
        </Link>
        
        <div className="team-member-grid">
          {/* Left Column: Image & Quick Info */}
          <div className="team-member-sidebar">
            <FadeIn>
              <div 
                className="team-member-avatar-wrapper"
                style={{ background: `linear-gradient(135deg, ${person.imageColor}15, ${person.imageColor}05)` }}
              >
                {person.image ? (
                  <img src={person.image} alt={person.name} className="team-member-avatar-image" />
                ) : (
                  <div 
                    className="team-member-avatar-text"
                    style={{ 
                      background: person.imageColor,
                      boxShadow: `0 10px 40px ${person.imageColor}40`
                    }}
                  >
                    {person.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                )}
              </div>

              <div className="team-member-connect-box">
                <h3 className="team-member-connect-title">Connect</h3>
                <div className="team-member-socials">
                  {person.socials.linkedin && (
                    <a href={person.socials.linkedin} className="team-member-social-link" target="_blank" rel="noreferrer">
                      <Linkedin className="team-member-social-icon" />
                    </a>
                  )}
                  {person.socials.github && (
                    <a href={person.socials.github} className="team-member-social-link" target="_blank" rel="noreferrer">
                      <Github className="team-member-social-icon" />
                    </a>
                  )}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Content */}
          <div className="team-member-content">
            <FadeIn delay={0.1}>
              <h1 className="team-member-name">
                {person.name}
              </h1>
              <div className="team-member-position" style={{ color: person.imageColor }}>
                {person.position}
              </div>
              <div className="team-member-professional-title">
                {person.professionalTitle}
              </div>

              <h2 className="team-member-section-title">Biography</h2>
              <p className="team-member-bio">
                {person.bio}
              </p>

              <div className="team-member-skills-grid">
                <div>
                  <div className="team-member-skills-header">
                    <BrainCircuit className="team-member-skills-icon" />
                    <h3 className="team-member-skills-title">Areas of Expertise</h3>
                  </div>
                  <ul className="team-member-skills-list">
                    {person.skills.map((skill, i) => (
                      <li key={i} className="team-member-skill-item">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: person.imageColor, width: "6px", height: "6px" }} />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="team-member-skills-header">
                    <Code className="team-member-skills-icon" />
                    <h3 className="team-member-skills-title">Technology Stack</h3>
                  </div>
                  <div className="team-member-tech-list">
                    {person.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="team-member-tech-item"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <Link
                to="/start-project"
                className="team-member-cta"
                style={{
                  padding: "14px 28px",
                  borderRadius: "12px",
                  fontSize: "14px",
                  background: `linear-gradient(135deg, var(--brand-blue), var(--brand-blue-dark))`,
                  boxShadow: `0 6px 20px rgba(20,120,245,0.32)`,
                }}
              >
                Work with {person.name.split(" ")[0]}
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>
    </main>
  );
}
