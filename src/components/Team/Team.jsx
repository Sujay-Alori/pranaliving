import { useReveal } from '../../hooks/useReveal';
import { team } from '../../data/residences';

function getInitials(name) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('');
}

export default function Team() {
  const headerRef = useReveal();

  return (
    <section className="team" id="team">
      <div className="team__inner">
        <div className="team__header reveal" ref={headerRef}>
          <span className="team__eyebrow">People</span>
          <h2 className="team__title">
            Meet The Team<br /> Behind The Work
          </h2>
        </div>

        <div className="team__grid">
          {team.map((member) => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamMember({ member }) {
  const ref = useReveal();

  return (
    <article className="team-member reveal" ref={ref}>
      <div className="team-member__portrait">
        <div className="team-member__portrait-placeholder">
          <span className="team-member__portrait-initial">
            {getInitials(member.name)}
          </span>
        </div>
      </div>
      <div className="team-member__info">
        <h3 className="team-member__name">{member.name}</h3>
        <p className="team-member__role">{member.role}</p>
        <p className="team-member__description">{member.description}</p>
      </div>
    </article>
  );
}
