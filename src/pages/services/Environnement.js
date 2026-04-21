import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../../components/ScrollReveal';
import environnementImg from '../../img/environnement.webp';
import '../ServicePage.css';

const steps = [
  { step: '01', title: 'Audit environnemental', desc: "Évaluation complète de votre impact environnemental et identification des points de conformité.", icon: '🔍' },
  { step: '02', title: 'Plan d\'action', desc: "Élaboration d'un plan d'action environnementale personnalisé et réaliste pour votre organisation.", icon: '📋' },
  { step: '03', title: 'Mise en place', desc: "Support dans la mise en œuvre des mesures d'amélioration environnementale et éco-responsabilité.", icon: '🌱' },
  { step: '04', title: 'Suivi et amélioration', desc: "Monitoring continu et ajustements pour assurer l'atteinte de vos objectifs de durabilité.", icon: '📊' },
];

const services = [
  { title: 'Audit éco-responsabilité', icon: '🌍', desc: "Évaluation complète de vos pratiques et impact environnemental avec recommandations d'amélioration." },
  { title: 'Plans environnementaux', icon: '🌿', desc: "Développement de stratégies et plans d'action pour réduire votre empreinte écologique." },
  { title: 'Certifications vertes', icon: '🏆', desc: "Accompagnement vers les certifications environnementales (ISO 14001, chartes vertes, etc.)." },
];

export default function Environnement() {
  useEffect(() => {
    document.title = 'Environnement — APAD';
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
            <span>Environnement</span>
          </div>
          <h1>Conseil en Environnement</h1>
          <p>Développez une stratégie environnementale responsable et durable pour votre activité.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-intro">
            <ScrollReveal direction="left">
              <div className="service-intro__text">
                <h2 className="section-title">Engagement envers la durabilité</h2>
                <div className="accent-line" />
                <p className="section-subtitle">
                  Nous vous aidons à minimiser votre impact environnemental, respecter les réglementations et progresser vers une activité plus durable et responsable.
                </p>
                <div className="service-intro__highlights">
                  <div className="highlight-item">✓ Évaluation d'impact environnemental</div>
                  <div className="highlight-item">✓ Plans d'action et stratégies vertes</div>
                  <div className="highlight-item">✓ Support vers la certification environnementale</div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="service-intro__visual service-intro__visual--blue">
                <div className="service-big-icon">
                  <img src={environnementImg} alt="Environnement" className="service-intro__image" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <ScrollReveal direction="up">
            <div className="text-center">
              <h2 className="section-title">Notre Démarche Environnementale</h2>
              <div className="accent-line-center" />
            </div>
          </ScrollReveal>
          <div className="steps-grid">
            {steps.map((s, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 100}>
                <div className="step-card">
                  <div className="step-card__number">{s.step}</div>
                  <div className="step-card__icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal direction="up">
            <div className="text-center">
              <h2 className="section-title">Nos Services Environnementaux</h2>
              <div className="accent-line-center" />
            </div>
          </ScrollReveal>
          <div className="services-grid">
            {services.map((s, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 150}>
                <div className="service-card">
                  <h3>{s.icon} {s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container text-center">
          <ScrollReveal direction="up">
            <h2 className="section-title">Engagez-vous pour une activité durable</h2>
            <p className="section-subtitle" style={{ marginBottom: '32px' }}>
              Parlons de vos enjeux environnementaux et d'une stratégie de durabilité adaptée.
            </p>
            <Link to="/contact" className="btn btn-primary">Démarrer notre collaboration</Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
