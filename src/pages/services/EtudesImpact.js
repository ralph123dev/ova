import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../ServicePage.css';

const studies = [
  {
    title: "Étude d'Impact Environnemental (EIE)",
    desc: 'Évaluation complète des impacts potentiels d\'un projet sur l\'environnement, conformément à la législation camerounaise et aux standards internationaux (BM, BAD).',
    icon: '📑',
    items: ['État initial de l\'environnement', 'Analyse des impacts positifs et négatifs', 'Mesures d\'atténuation et compensation', 'Plan de Gestion Environnementale (PGE)'],
  },
  {
    title: 'Audit Environnemental',
    desc: 'Évaluation objective et systématique des pratiques environnementales d\'une organisation, de ses installations et de ses processus pour vérifier leur conformité.',
    icon: '🔬',
    items: ['Audit de conformité réglementaire', 'Audit de performance environnementale', 'Cartographie des risques', 'Recommandations correctives priorisées'],
  },
  {
    title: 'Suivi de conformité & post-étude',
    desc: 'Accompagnement continu après la réalisation des études pour assurer la mise en œuvre effective des recommandations et mesures environnementales.',
    icon: '📈',
    items: ['Suivi du Plan de Gestion Environnementale', 'Rapports périodiques de conformité', 'Accompagnement aux inspections officielles', 'Mise à jour des mesures selon l\'évolution'],
  },
];

const sectors = [
  { name: 'Mines & Carrières', icon: '⛏️' },
  { name: 'Agro-industrie', icon: '🌾' },
  { name: 'Infrastructures', icon: '🏗️' },
  { name: 'Énergie', icon: '⚡' },
  { name: 'Télécommunications', icon: '📡' },
  { name: 'Immobilier', icon: '🏢' },
];

export default function EtudesImpact() {
  useEffect(() => {
    document.title = 'Études d\'impact environnemental — OVA Service Plus';
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
            <span>Études d'impact</span>
          </div>
          <h1>Études d'Impact Environnemental</h1>
          <p>Des études complètes et rigoureuses conformes aux normes en vigueur.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-intro">
            <div className="service-intro__text">
              <h2 className="section-title">Expertise environnementale certifiée</h2>
              <div className="accent-line" />
              <p className="section-subtitle">
                OVA Service Plus réalise des études d'impact environnemental de haute qualité, conformes aux exigences légales camerounaises et aux standards des bailleurs de fonds internationaux.
              </p>
              <div className="service-intro__highlights">
                <div className="service-highlight">
                  <span className="service-highlight__icon">✅</span>
                  <span>Conformité aux normes camerounaises et internationales</span>
                </div>
                <div className="service-highlight">
                  <span className="service-highlight__icon">✅</span>
                  <span>Experts accrédités en évaluation environnementale</span>
                </div>
                <div className="service-highlight">
                  <span className="service-highlight__icon">✅</span>
                  <span>Rapports acceptés par les autorités et bailleurs</span>
                </div>
                <div className="service-highlight">
                  <span className="service-highlight__icon">✅</span>
                  <span>Délais respectés et confidentialité garantie</span>
                </div>
              </div>
            </div>
            <div className="service-intro__visual service-intro__visual--sky">
              <div className="service-big-icon">🌿</div>
              <div className="service-intro__stat">
                <strong>80+</strong>
                <span>EIE réalisées</span>
              </div>
              <div className="service-intro__stat">
                <strong>100%</strong>
                <span>Conformité légale</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '40px' }}>
            <h2 className="section-title">Nos Prestations</h2>
            <div className="accent-line-center" />
          </div>
          <div className="eie-cards">
            {studies.map((s, i) => (
              <div className="eie-card" key={i}>
                <div className="eie-card__header">
                  <span className="eie-card__icon">{s.icon}</span>
                  <h3>{s.title}</h3>
                </div>
                <p>{s.desc}</p>
                <ul className="eie-card__list">
                  {s.items.map((item, j) => (
                    <li key={j}><span>→</span> {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '40px' }}>
            <h2 className="section-title">Secteurs d'intervention</h2>
            <div className="accent-line-center" />
            <p className="section-subtitle" style={{ margin: '0 auto' }}>Nous intervenons dans de nombreux secteurs d'activité.</p>
          </div>
          <div className="sectors-grid">
            {sectors.map((s, i) => (
              <div className="sector-card" key={i}>
                <div className="sector-card__icon">{s.icon}</div>
                <span>{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-cta-banner service-cta-banner--sky">
        <div className="container service-cta-banner__inner">
          <div>
            <h2>Besoin d'une étude d'impact ?</h2>
            <p>Nos experts sont disponibles pour évaluer vos besoins et vous proposer une offre adaptée.</p>
          </div>
          <Link to="/contact" className="btn btn-primary" id="eie-cta">
            Demander un devis
          </Link>
        </div>
      </section>
    </div>
  );
}
