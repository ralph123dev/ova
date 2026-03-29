import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../ServicePage.css';

const steps = [
  {
    step: '01',
    title: 'Diagnostic initial',
    desc: 'Analyse approfondie de votre situation, identification des enjeux et définition des objectifs de votre projet.',
    icon: '🔍',
  },
  {
    step: '02',
    title: 'Montage du projet',
    desc: 'Structuration du projet, élaboration du plan d\'action, identification des partenaires et des sources de financement.',
    icon: '📋',
  },
  {
    step: '03',
    title: 'Conseil et expertise',
    desc: 'Accompagnement réglementaire et administratif, assistance dans les démarches auprès des autorités compétentes.',
    icon: '⚖️',
  },
  {
    step: '04',
    title: 'Appui opérationnel',
    desc: 'Suivi de la mise en œuvre, résolution des obstacles, coordination des parties prenantes jusqu\'à la livraison.',
    icon: '🚀',
  },
];

const services = [
  { title: 'Montage et structuration de projets', icon: '📐', desc: 'Nous vous aidons à donner une forme solide et viable à votre projet, de la conception à la présentation aux financeurs.' },
  { title: 'Conseil administratif et réglementaire', icon: '📜', desc: 'Navigation dans le cadre légal et réglementaire camerounais et international pour sécuriser vos démarches.' },
  { title: 'Appui opérationnel aux entreprises', icon: '⚙️', desc: 'Assistance concrète sur le terrain pour la mise en œuvre de vos projets de développement.' },
];

export default function Accompagnement() {
  useEffect(() => {
    document.title = 'Accompagnement — OVA Service Plus';
  }, []);

  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Accueil</Link>
            <span>›</span>
            <span>Nos Services</span>
            <span>›</span>
            <span>Accompagnement</span>
          </div>
          <h1>Accompagnement de Projets</h1>
          <p>Un partenaire de confiance à chaque étape du développement de votre projet.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-intro">
            <div className="service-intro__text">
              <h2 className="section-title">Un soutien sur mesure</h2>
              <div className="accent-line" />
              <p className="section-subtitle">
                OVA Service Plus offre un accompagnement personnalisé et continu à chaque étape du développement de votre projet. De la conception à la réalisation, nous sommes à vos côtés.
              </p>
              <div className="service-intro__highlights">
                <div className="service-highlight">
                  <span className="service-highlight__icon">✅</span>
                  <span>Approche centrée sur vos besoins spécifiques</span>
                </div>
                <div className="service-highlight">
                  <span className="service-highlight__icon">✅</span>
                  <span>Expertise locale et connaissance du terrain</span>
                </div>
                <div className="service-highlight">
                  <span className="service-highlight__icon">✅</span>
                  <span>Réseau de partenaires institutionnels</span>
                </div>
                <div className="service-highlight">
                  <span className="service-highlight__icon">✅</span>
                  <span>Suivi rigoureux et reporting régulier</span>
                </div>
              </div>
            </div>
            <div className="service-intro__visual service-intro__visual--orange">
              <div className="service-big-icon">🤝</div>
              <div className="service-intro__stat">
                <strong>100+</strong>
                <span>Projets accompagnés</span>
              </div>
              <div className="service-intro__stat">
                <strong>95%</strong>
                <span>Taux de satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <h2 className="section-title">Notre Méthodologie</h2>
            <div className="accent-line-center" />
            <p className="section-subtitle" style={{ margin: '0 auto' }}>Un processus clair et structuré pour garantir le succès de votre projet.</p>
          </div>
          <div className="service-steps">
            {steps.map((s, i) => (
              <div className="service-step" key={i}>
                <div className="service-step__number">{s.step}</div>
                <div className="service-step__icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                {i < steps.length - 1 && <div className="service-step__arrow">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '40px' }}>
            <h2 className="section-title">Nos Prestations</h2>
            <div className="accent-line-center" />
          </div>
          <div className="service-modules__grid">
            {services.map((s, i) => (
              <div className="service-module-card" key={i}>
                <div className="service-module-card__icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-cta-banner service-cta-banner--orange">
        <div className="container service-cta-banner__inner">
          <div>
            <h2>Votre projet mérite le meilleur accompagnement</h2>
            <p>Prenez contact avec notre équipe pour une consultation initiale gratuite.</p>
          </div>
          <Link to="/contact" className="btn btn-primary" id="accompagnement-cta">
            Démarrer maintenant
          </Link>
        </div>
      </section>
    </div>
  );
}
