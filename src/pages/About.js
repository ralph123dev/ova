import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const team = [
  { name: 'Direction Générale', role: "Leadership stratégique et vision d'entreprise", icon: '👔' },
  { name: 'Pôle Environnement', role: 'Experts en études d\'impact et conformité', icon: '🌿' },
  { name: 'Pôle Formation', role: 'Formateurs certifiés et pédagogues', icon: '🎓' },
  { name: 'Pôle Accompagnement', role: 'Consultants en développement de projets', icon: '🤝' },
];

const milestones = [
  { year: '2010', event: "Création d'OVA Service Plus au Cameroun" },
  { year: '2014', event: 'Lancement des programmes de formation certifiés' },
  { year: '2018', event: 'Ouverture de la présence internationale (Canada)' },
  { year: '2021', event: 'Expansion des études d\'impact environnemental' },
  { year: '2024', event: 'Plus de 200 projets réalisés avec succès' },
];

export default function About() {
  useEffect(() => {
    document.title = 'À propos — OVA Service Plus';
  }, []);

  return (
    <div className="about">
      {/* Hero */}
      <section className="page-hero" aria-label="En-tête à propos">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Accueil</Link>
            <span>›</span>
            <span>À propos</span>
          </div>
          <h1>À propos d'OVA Service Plus</h1>
          <p>Une entreprise engagée pour un développement durable, conforme et efficace.</p>
        </div>
      </section>

      {/* Mission */}
      <section className="section" aria-labelledby="mission-heading">
        <div className="container about-mission">
          <div className="about-mission__text">
            <h2 className="section-title" id="mission-heading">Notre Mission</h2>
            <div className="accent-line" />
            <p className="section-subtitle">
              OVA Service Plus est une entreprise spécialisée dans l'accompagnement des entreprises et des particuliers à travers des services de formation, de conseil et de réalisation d'études d'impact environnemental.
            </p>
            <p style={{ color: 'var(--gray)', lineHeight: 1.8, marginTop: '16px' }}>
              Notre mission est d'aider nos clients à développer des projets durables, conformes aux exigences environnementales et pleinement adaptés aux réalités locales. Nous intervenons auprès d'entreprises privées, d'organisations publiques et de porteurs de projets individuels.
            </p>
            <div className="about-mission__tags">
              <span className="about-tag">🌍 Cameroun</span>
              <span className="about-tag">🌐 Canada</span>
              <span className="about-tag">🌿 Développement durable</span>
            </div>
          </div>
          <div className="about-mission__visual">
            <div className="about-mission__card">
              <div className="about-mission__card-icon">🏢</div>
              <h3>Entreprises privées</h3>
              <p>Solutions sur mesure pour vos enjeux environnementaux</p>
            </div>
            <div className="about-mission__card about-mission__card--orange">
              <div className="about-mission__card-icon">🏛️</div>
              <h3>Organisations publiques</h3>
              <p>Accompagnement dans les démarches réglementaires</p>
            </div>
            <div className="about-mission__card about-mission__card--sky">
              <div className="about-mission__card-icon">👤</div>
              <h3>Porteurs de projets</h3>
              <p>Soutien individuel de l'idée à la réalisation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section-alt" aria-labelledby="values-heading-about">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title" id="values-heading-about">Nos Valeurs</h2>
            <div className="accent-line-center" />
          </div>
          <div className="about-values__grid">
            <div className="about-value">
              <div className="about-value__icon" style={{ background: 'rgba(26,58,107,0.1)', color: 'var(--blue-dark)' }}>🏆</div>
              <h3>Excellence</h3>
              <p>Nous visons l'excellence dans chaque mission en nous appuyant sur des expertises reconnues et des méthodes rigoureuses.</p>
            </div>
            <div className="about-value">
              <div className="about-value__icon" style={{ background: 'rgba(232,119,34,0.1)', color: 'var(--orange)' }}>🌱</div>
              <h3>Durabilité</h3>
              <p>Chaque projet est conçu pour respecter l'environnement et contribuer au développement durable des générations futures.</p>
            </div>
            <div className="about-value">
              <div className="about-value__icon" style={{ background: 'rgba(46,127,193,0.1)', color: 'var(--blue-sky)' }}>🔍</div>
              <h3>Rigueur</h3>
              <p>Nos études et conseils s'appuient sur des analyses rigoureuses et des méthodes éprouvées par l'expérience.</p>
            </div>
            <div className="about-value">
              <div className="about-value__icon" style={{ background: 'rgba(26,58,107,0.1)', color: 'var(--blue-dark)' }}>🤝</div>
              <h3>Proximité</h3>
              <p>Nous construisons des relations de confiance durables avec nos clients, fondées sur l'écoute et la transparence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section" aria-labelledby="timeline-heading">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title" id="timeline-heading">Notre Parcours</h2>
            <div className="accent-line-center" />
          </div>
          <div className="about-timeline">
            {milestones.map((m, i) => (
              <div className={`about-timeline__item${i % 2 === 0 ? '' : ' about-timeline__item--right'}`} key={i}>
                <div className="about-timeline__year">{m.year}</div>
                <div className="about-timeline__dot" />
                <div className="about-timeline__content">
                  <p>{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section section-dark" aria-labelledby="team-heading">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title-white" id="team-heading">Notre Équipe</h2>
            <div className="accent-line-center" />
            <p className="section-subtitle-white" style={{ margin: '0 auto 40px' }}>
              Une équipe pluridisciplinaire d'experts engagés à vos côtés.
            </p>
          </div>
          <div className="about-team__grid">
            {team.map((t, i) => (
              <div className="about-team-card" key={i}>
                <div className="about-team-card__icon">{t.icon}</div>
                <h3>{t.name}</h3>
                <p>{t.role}</p>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '40px' }}>
            <Link to="/contact" className="btn btn-primary" id="about-cta">
              Travailler avec nous
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
