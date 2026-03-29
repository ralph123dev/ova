import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../ServicePage.css';

const modules = [
  {
    title: 'Formation en environnement et développement durable',
    desc: 'Maîtrisez les enjeux environnementaux actuels et intégrez les pratiques de développement durable dans votre organisation. Programme conçu pour les professionnels du secteur public et privé.',
    duration: '3 à 5 jours',
    level: 'Tous niveaux',
    icon: '🌱',
  },
  {
    title: 'Gestion de projet et management',
    desc: 'Acquérez les outils et méthodes pour piloter efficacement vos projets : planification, coordination d\'équipe, suivi budgétaire et reporting.',
    duration: '5 jours',
    level: 'Intermédiaire',
    icon: '📊',
  },
  {
    title: 'Sensibilisation écologique pour entreprises et communautés',
    desc: 'Sensibilisez vos équipes et vos parties prenantes aux défis environnementaux. Programme adapté aux entreprises souhaitant renforcer leur politique RSE.',
    duration: '1 à 2 jours',
    level: 'Initiation',
    icon: '♻️',
  },
];

export default function Formation() {
  useEffect(() => {
    document.title = 'Formations — OVA Service Plus';
  }, []);

  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Accueil</Link>
            <span>›</span>
            <Link to="/services/formation">Nos Services</Link>
            <span>›</span>
            <span>Formations</span>
          </div>
          <h1>Formations Professionnelles</h1>
          <p>Des programmes adaptés aux professionnels et organisations pour un avenir durable.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-intro">
            <div className="service-intro__text">
              <h2 className="section-title">Développez vos compétences</h2>
              <div className="accent-line" />
              <p className="section-subtitle">
                OVA Service Plus propose des programmes de formation de haute qualité, animés par des experts reconnus. Nos formations combinent théorie et pratique pour un impact immédiat sur le terrain.
              </p>
              <div className="service-intro__highlights">
                <div className="service-highlight">
                  <span className="service-highlight__icon">✅</span>
                  <span>Formateurs experts certifiés</span>
                </div>
                <div className="service-highlight">
                  <span className="service-highlight__icon">✅</span>
                  <span>Approche pédagogique participative</span>
                </div>
                <div className="service-highlight">
                  <span className="service-highlight__icon">✅</span>
                  <span>Contenu actualisé et adapté au contexte local</span>
                </div>
                <div className="service-highlight">
                  <span className="service-highlight__icon">✅</span>
                  <span>Attestation de formation délivrée</span>
                </div>
              </div>
            </div>
            <div className="service-intro__visual service-intro__visual--blue">
              <div className="service-big-icon">🎓</div>
              <div className="service-intro__stat">
                <strong>30+</strong>
                <span>Formations dispensées</span>
              </div>
              <div className="service-intro__stat">
                <strong>500+</strong>
                <span>Participants formés</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '40px' }}>
            <h2 className="section-title">Nos Programmes</h2>
            <div className="accent-line-center" />
          </div>
          <div className="service-modules__grid">
            {modules.map((m, i) => (
              <div className="service-module-card" key={i}>
                <div className="service-module-card__icon">{m.icon}</div>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
                <div className="service-module-card__meta">
                  <span>⏱ {m.duration}</span>
                  <span>📈 {m.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-cta-banner">
        <div className="container service-cta-banner__inner">
          <div>
            <h2>Intéressé par nos formations ?</h2>
            <p>Contactez-nous pour un devis personnalisé ou pour en savoir plus sur nos programmes.</p>
          </div>
          <Link to="/contact" className="btn btn-primary" id="formation-cta">
            Demander une formation
          </Link>
        </div>
      </section>
    </div>
  );
}
