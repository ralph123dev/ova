import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../../components/ScrollReveal';
import comptabiliteImg from '../../img/comptabilité.jpg';
import '../ServicePage.css';

const steps = [
  { step: '01', title: 'Mise en place', desc: "Structuration de vos comptes, mise en conformité avec les normes comptables en vigueur.", icon: '📋' },
  { step: '02', title: 'Tenue de comptes', desc: "Enregistrement régulier de toutes vos transactions financières et comptables.", icon: '💼' },
  { step: '03', title: 'Reporting', desc: "Génération de rapports financiers et tableaux de bord pour votre suivi de gestion.", icon: '📊' },
  { step: '04', title: 'Conformité', desc: "Respect des obligations légales et fiscales, audit et conseils de conformité.", icon: '✓' },
];

const services = [
  { title: 'Tenue comptable complète', icon: '📑', desc: "Gestion intégrale de vos écritures comptables et de vos comptes financiers." },
  { title: 'Audit financier', icon: '🔍', desc: "Audit complet de vos comptes et identification des axes d'amélioration." },
  { title: 'Conseils fiscaux', icon: '⚖️', desc: "Accompagnement en matière fiscale et optimisation de votre situation imposable." },
];

export default function Comptabilite() {
  useEffect(() => {
    document.title = 'Comptabilité — OVA Service Plus';
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
            <span>Comptabilité</span>
          </div>
          <h1>Services Comptables</h1>
          <p>Une gestion comptable rigoureuse et conforme pour une transparence financière totale.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-intro">
            <ScrollReveal direction="left">
              <div className="service-intro__text">
                <h2 className="section-title">Comptabilité fiable et conforme</h2>
                <div className="accent-line" />
                <p className="section-subtitle">
                  Nous gérons l'ensemble de votre comptabilité de manière professionnelle et conforme aux normes légales camerounaises et internationales.
                </p>
                <div className="service-intro__highlights">
                  <div className="highlight-item">✓ Tenue intégrale de comptes</div>
                  <div className="highlight-item">✓ Conformité avec la législation en vigueur</div>
                  <div className="highlight-item">✓ Rapports financiers réguliers</div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="service-intro__visual service-intro__visual--orange">
                <div className="service-big-icon">
                  <img src={comptabiliteImg} alt="Comptabilité" className="service-intro__image" />
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
              <h2 className="section-title">Notre Processus</h2>
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
              <h2 className="section-title">Nos Services Comptables</h2>
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
            <h2 className="section-title">Sécurisez votre gestion comptable</h2>
            <p className="section-subtitle" style={{ marginBottom: '32px' }}>
              Confiez-nous votre comptabilité pour vous concentrer sur votre cœur de métier.
            </p>
            <Link to="/contact" className="btn btn-primary">Nous contacter</Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
