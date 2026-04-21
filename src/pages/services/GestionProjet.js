import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../../components/ScrollReveal';
import gestion_projetImg from '../../img/gestion_de_projet.jpg';
import '../ServicePage.css';

const steps = [
  { step: '01', title: 'Lancement du projet', desc: "Définition claire des objectifs, des livrables, du périmètre et de la planning du projet.", icon: '🚀' },
  { step: '02', title: 'Planification', desc: "Établissement d'un planning détaillé, allocation des ressources et identification des risques.", icon: '📅' },
  { step: '03', title: 'Exécution et pilotage', desc: "Coordination des équipes, suivi de la progression et ajustements nécessaires en temps réel.", icon: '⚙️' },
  { step: '04', title: 'Clôture', desc: "Livraison des résultats, documentation, bilan et retours d'expérience du projet réalisé.", icon: '✅' },
];

const services = [
  { title: 'Pilotage de projets', icon: '📊', desc: "Direction stratégique et opérationnelle de vos projets pour respecter périmètre, délais et budgets." },
  { title: 'Gestion des risques', icon: '🛡️', desc: "Identification, analyse et mitigation des risques tout au long de la vie du projet." },
  { title: 'Formation PM', icon: '🎓', desc: "Formation des équipes aux meilleures pratiques de gestion de projet et méthodologies agiles." },
];

export default function GestionProjet() {
  useEffect(() => {
    document.title = 'Gestion de Projet — APAD';
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
            <span>Gestion de Projet</span>
          </div>
          <h1>Gestion de Projets</h1>
          <p>Pilotez vos projets vers la réussite avec rigueur, efficacité et professionnalisme.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-intro">
            <ScrollReveal direction="left">
              <div className="service-intro__text">
                <h2 className="section-title">Projets maîtrisés, objectifs atteints</h2>
                <div className="accent-line" />
                <p className="section-subtitle">
                  Nous pilotons vos projets en respectant les délais, les budgets et les standards de qualité attendus. Nos experts garantissent une exécution impeccable.
                </p>
                <div className="service-intro__highlights">
                  <div className="highlight-item">✓ Pilotage rigoureux et transparent</div>
                  <div className="highlight-item">✓ Respect des délais et budgets</div>
                  <div className="highlight-item">✓ Gestion des risques et des changements</div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="service-intro__visual service-intro__visual--sky">
                <div className="service-big-icon">
                  <img src={gestion_projetImg} alt="Gestion de Projet" className="service-intro__image" />
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
              <h2 className="section-title">Notre Approche de Gestion</h2>
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
              <h2 className="section-title">Nos Services de Gestion</h2>
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
            <h2 className="section-title">Créez vos projets avec confiance</h2>
            <p className="section-subtitle" style={{ marginBottom: '32px' }}>
              Engagez nos experts pour piloter vos projets vers leur succès.
            </p>
            <Link to="/contact" className="btn btn-primary">Solliciter notre expertise</Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
