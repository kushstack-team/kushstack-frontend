import { Link } from "react-router-dom";
import { FadeIn } from "../components/ui/FadeIn";
import { SectionLabel } from "../components/ui/SectionLabel";
import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import "./Team.css";

const Linkedin = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const Github = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>;

export const getTeamMembers = () => [
  {
    id: "mustafa-khamis",
    name: "Mustafa Khamis",
    position: "Founder & Technology Lead",
    professionalTitle: "Full-Stack Software Engineer",
    role: "leadership",
    bio: "Mustafa is the Founder and Technology Lead of KushStack Team. He specializes in designing and building modern digital products from concept to deployment, combining expertise in frontend, backend, mobile development, databases, and cloud technologies. Passionate about scalable software architecture, clean code, exceptional user experiences, and solving real business problems through technology.",
    skills: ["Scalable Software Architecture", "Modern Web & Mobile Delivery", "Product Strategy & Engineering"],
    technologies: ["React", "Node.js", "Flutter", "PostgreSQL", "AWS"],
    socials: { linkedin: "https://www.linkedin.com/", github: "https://github.com/" },
    image: "/images/leadership/mustafa.png",
    imageColor: "#1478f5",
  },
  {
    id: "mohamed-yaser",
    name: "Mohamed Yaser",
    position: "Social Media Director",
    professionalTitle: "Backend Developer & Digital Content Strategist",
    role: "leadership",
    bio: "Mohamed leads KushStack's digital presence by managing content strategy, social media growth, and brand communication while contributing to backend development. He combines technical knowledge with creative storytelling to help showcase KushStack's expertise and connect with businesses through engaging content.",
    skills: ["Digital Brand Strategy", "Social Media Growth", "Backend Development"],
    technologies: ["Node.js", "PostgreSQL", "Content Strategy", "Automation"],
    socials: { linkedin: "https://www.linkedin.com/", github: "https://github.com/" },
    image: "/images/leadership/mohamed-yaser.png",
    imageColor: "#7c3aed",
  },
  {
    id: "mohammed-salahelden",
    name: "Mohammed Salahelden",
    position: "Senior Application Developer",
    professionalTitle: "Senior Application Developer | Backend Engineer",
    role: "leadership",
    bio: "Software developer passionate about building scalable mobile experiences with Flutter and crafting robust backend architectures with Node.js and PostgreSQL. Dedicated to writing clean, maintainable code and delivering efficient, scalable software solutions for modern businesses.",
    skills: ["Mobile App Development", "Scalable Backend Architecture", "Clean, Maintainable Code"],
    technologies: ["Flutter", "Node.js", "PostgreSQL", "Docker"],
    socials: {
      linkedin: "https://www.linkedin.com/in/mohammed-salahelden-hassan-647b6128a",
      github: "https://github.com/MohammedSalaheldenHassan"
    },
    image: "/images/leadership/mohammed-salahelden.png",
    imageColor: "#0891b2",
  },
  {
    id: "emma-watson",
    name: "Emma Watson",
    position: "AI Engineer",
    role: "member",
    bio: "Emma builds AI-driven experiences with a focus on practical product outcomes and thoughtful user experiences.",
    skills: ["Machine Learning", "Data Engineering"],
    technologies: ["Python", "PyTorch", "OpenAI API"],
    socials: { github: "#", linkedin: "#" },
    imageColor: "#f59e0b",
  },
  {
    id: "david-kim",
    name: "David Kim",
    position: "Platform Engineer",
    role: "member",
    bio: "David helps teams ship resilient backend infrastructure and dependable APIs for fast-moving product teams.",
    skills: ["API Design", "Database Modeling"],
    technologies: ["PostgreSQL", "Redis", "Docker"],
    socials: { github: "#", linkedin: "#" },
    imageColor: "#10b981",
  }
];

export default function Team() {
  const { t } = useTranslation();
  const teamMembersData = getTeamMembers();
  const leadership = teamMembersData.filter((m) => m.role === "leadership");
  const members = teamMembersData.filter((m) => m.role === "member");

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
                      {person.image ? (
                        <img src={person.image} alt={person.name} className="team-card-avatar-image" />
                      ) : (
                        person.name.split(" ").map((n) => n[0]).join("")
                      )}
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
                        {person.socials.linkedin && (
                          <a href={person.socials.linkedin} className="team-card-social-link" target="_blank" rel="noreferrer">
                            <Linkedin className="team-social-icon" />
                          </a>
                        )}
                        {person.socials.github && (
                          <a href={person.socials.github} className="team-card-social-link" target="_blank" rel="noreferrer">
                            <Github className="team-social-icon" />
                          </a>
                        )}
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
