import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../../components/ScrollReveal';
import bureautiqueImg from '../../img/bureautique.jpg';
import '../ServicePage.css';

const steps = [
  { step: '01', title: 'Diagnostic usages', desc: "Évaluation de vos besoins bureautiques actuels et identification des axes d'optimisation.", icon: '📋' },
  { step: '02', title: 'Formation ciblée', desc: "Programmes de formation adaptés à votre contexte pour maîtriser les outils bureautiques essentiels.", icon: '🎓' },
  { step: '03', title: 'Implémentation', desc: "Mise en place de solutions et bonnes pratiques pour améliorer votre productivité et efficacité.", icon: '⚙️' },
  { step: '04', title: 'Accompagnement', desc: "Support continu et conseils pour optimiser l'utilisation de vos outils et votre collaboration digitale.", icon: '🤝' },
];

const services = [
  { title: 'Formation bureautique', icon: '💻', desc: "Formations complètes sur les outils de bureautique standard (Microsoft Office, alternatives, etc.)." },
  { title: 'Productivité digitale', icon: '⚡', desc: "Conseils et formations sur les bonnes pratiques de travail collaboratif et outils de productivité." },
  { title: 'Support technique', icon: '🔧', desc: "Assistance et support pour l'utilisation optimale de vos outils et solutions bureautiques." },
];

export default function Bureautique() {
  useEffect(() => {
    document.title = 'Bureautique — APAD Environnement';
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
            <span>Bureautique</span>
          </div>
          <h1>Solutions Bureautiques</h1>
          <p>Maîtrisez vos outils bureautiques pour une productivité optimale et une collaboration efficace.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-intro">
            <ScrollReveal direction="left">
              <div className="service-intro__text">
                <h2 className="section-title">Productivité renforcée</h2>
                <div className="accent-line" />
                <p className="section-subtitle">
                  Nous vous formons et accompagnons pour maîtriser vos outils bureautiques, optimiser votre collaboration et augmenter votre efficacité personnelle et collective.
                </p>
                <div className="service-intro__highlights">
                  <div className="highlight-item">✓ Formations sur mesure</div>
                  <div className="highlight-item">✓ Amélioration de la productivité</div>
                  <div className="highlight-item">✓ Outils collaboratifs modernes</div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="service-intro__visual service-intro__visual--orange">
                <div className="service-big-icon">
                  <img src={bureautiqueImg} alt="Bureautique" className="service-intro__image" />
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
              <h2 className="section-title">Notre Approche Bureautique</h2>
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
              <h2 className="section-title">Nos Services Bureautiques</h2>
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
            <h2 className="section-title">Optimisez votre productivité bureautique</h2>
            <p className="section-subtitle" style={{ marginBottom: '32px' }}>
              Contactez-nous pour un diagnostic et une formation bureautique personnalisée.
            </p>
            <Link to="/contact" className="btn btn-primary">Nous consulter</Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
