import { Link } from "react-router-dom";
import { FadeIn } from "../components/ui/FadeIn";
import { SectionLabel } from "../components/ui/SectionLabel";
import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import "./Team.css";

const Linkedin = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const Github = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>;
const Twitter = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>;

export const getTeamMembers = (t) => [
  {
    id: "alex-turner",
    name: "Alex Turner",
    position: t('team.data.alex-turner.position'),
    role: "leadership",
    bio: t('team.data.alex-turner.bio'),
    skills: ["System Architecture", "Cloud Infrastructure", "Engineering Leadership"],
    technologies: ["Node.js", "AWS", "TypeScript", "Go"],
    socials: { linkedin: "#", github: "#", twitter: "#" },
    imageColor: "#1478f5",
  },
  {
    id: "sarah-chen",
    name: "Sarah Chen",
    position: t('team.data.sarah-chen.position'),
    role: "leadership",
    bio: t('team.data.sarah-chen.bio'),
    skills: ["UI/UX Design", "Design Systems", "User Research"],
    technologies: ["Figma", "Framer", "CSS/SCSS", "React"],
    socials: { linkedin: "#", twitter: "#" },
    imageColor: "#7c3aed",
  },
  {
    id: "michael-okeke",
    name: "Michael Okeke",
    position: t('team.data.michael-okeke.position'),
    role: "leadership",
    bio: t('team.data.michael-okeke.bio'),
    skills: ["Frontend Architecture", "Performance Optimization", "Web Animations"],
    technologies: ["React", "Next.js", "WebGL", "Motion"],
    socials: { linkedin: "#", github: "#" },
    imageColor: "#0891b2",
  },
  {
    id: "emma-watson",
    name: "Emma Watson",
    position: t('team.data.emma-watson.position'),
    role: "member",
    bio: t('team.data.emma-watson.bio'),
    skills: ["Machine Learning", "Data Engineering"],
    technologies: ["Python", "PyTorch", "OpenAI API"],
    socials: { github: "#", linkedin: "#" },
    imageColor: "#f59e0b",
  },
  {
    id: "david-kim",
    name: "David Kim",
    position: t('team.data.david-kim.position'),
    role: "member",
    bio: t('team.data.david-kim.bio'),
    skills: ["API Design", "Database Modeling"],
    technologies: ["PostgreSQL", "Redis", "Docker"],
    socials: { github: "#", linkedin: "#" },
    imageColor: "#10b981",
  }
];

export default function Team() {
  const { t } = useTranslation();
  const teamMembersData = getTeamMembers(t);
  const leadership = teamMembersData.filter(m => m.role === "leadership");
  const members = teamMembersData.filter(m => m.role === "member");

  return (
    <main className="team-main">
      <div className="team-container">
        {/* Header */}
        <div className="team-header-wrapper">
          <FadeIn>
            <SectionLabel>{t('team.label')}</SectionLabel>
            <h1 className="team-title">
              {t('team.title')}
            </h1>
            <p className="team-subtitle">
              {t('team.subtitle')}
            </p>
          </FadeIn>
        </div>

        {/* Leadership Section */}
        <div className="team-leadership-section">
          <FadeIn>
            <h2 className="team-section-title">{t('team.leadership')}</h2>
          </FadeIn>
          <div className="team-leadership-grid">
            {leadership.map((person, idx) => (
              <FadeIn key={person.id} delay={idx * 0.1}>
                <Link
                  to={`/team/${person.id}`}
                  className="team-card group"
                >
                  <div
                    className="team-card-banner"
                    style={{ background: `linear-gradient(135deg, ${person.imageColor}15, ${person.imageColor}05)` }}
                  >
                    <div
                      className="team-card-avatar"
                      style={{
                        background: person.imageColor,
                        boxShadow: `0 10px 30px ${person.imageColor}40`
                      }}
                    >
                      {person.name.split(" ").map(n => n[0]).join("")}
                    </div>
                  </div>

                  <div className="team-card-body">
                    <h3 className="team-card-name">{person.name}</h3>
                    <div className="team-card-position" style={{ color: person.imageColor }}>
                      {person.position}
                    </div>

                    <p className="team-card-bio">
                      {person.bio}
                    </p>

                    <div className="team-card-footer">
                      <div className="team-card-socials">
                        {person.socials.linkedin && <Linkedin className="team-social-icon" />}
                        {person.socials.github && <Github className="team-social-icon" />}
                        {person.socials.twitter && <Twitter className="team-social-icon" />}
                      </div>
                      <div className="team-view-profile">
                        {t('team.view_profile')} <ArrowUpRight className="team-view-profile-icon rtl-arrow" />
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Team Members Section */}
        <div>
          <FadeIn>
            <h2 className="team-section-title">{t('team.members')}</h2>
          </FadeIn>
          <div className="team-members-grid">
            {members.map((person, idx) => (
              <FadeIn key={person.id} delay={idx * 0.1}>
                <Link
                  to={`/team/${person.id}`}
                  className="team-member-card group"
                >
                  <div className="team-member-header">
                    <div
                      className="team-member-avatar"
                      style={{ background: person.imageColor }}
                    >
                      {person.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <h3 className="team-member-name">{person.name}</h3>
                      <div className="team-member-position">{person.position}</div>
                    </div>
                  </div>
                  <p className="team-member-bio">
                    {person.bio}
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
