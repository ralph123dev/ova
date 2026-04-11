import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../../components/ScrollReveal';
import financeImg from '../../img/finance.jpg';
import '../ServicePage.css';

const steps = [
  { step: '01', title: 'Diagnostic financier', desc: "Analyse approfondie de votre situation financière, identification des forces et des axes d'amélioration.", icon: '🔍' },
  { step: '02', title: 'Planification', desc: "Élaboration d'une stratégie financière adaptée à vos objectifs de croissance et de pérennité.", icon: '📋' },
  { step: '03', title: 'Optimisation', desc: "Mise en place de mécanismes pour optimiser vos flux de trésorerie et réduire les coûts inutiles.", icon: '⚙️' },
  { step: '04', title: 'Suivi', desc: "Accompagnement continu avec tableaux de bord d'indicateurs et conseils adaptés à votre évolution.", icon: '📊' },
];

const services = [
  { title: 'Conseil en gestion financière', icon: '💰', desc: "Stratégie financière personnalisée pour sécuriser et optimiser la gestion de vos ressources." },
  { title: 'Analyse budgétaire', icon: '📈', desc: "Élaboration et suivi budgétaires pour une meilleure maîtrise de vos dépenses et investissements." },
  { title: 'Structure financière', icon: '🏢', desc: "Accompagnement dans la restructuration financière et l'optimisation de votre capital." },
];

export default function Finance() {
  useEffect(() => {
    document.title = 'Finance — OVA Service Plus';
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
            <span>Finance</span>
          </div>
          <h1>Conseil en Finance</h1>
          <p>Maîtrisez votre situation financière et optimisez votre croissance économique.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-intro">
            <ScrollReveal direction="left">
              <div className="service-intro__text">
                <h2 className="section-title">Une vision claire de vos finances</h2>
                <div className="accent-line" />
                <p className="section-subtitle">
                  Notre équipe d'experts en finance vous aide à prendre les bonnes décisions pour assurer la pérennité et la croissance de votre organisation.
                </p>
                <div className="service-intro__highlights">
                  <div className="highlight-item">✓ Diagnostic complet de votre situation</div>
                  <div className="highlight-item">✓ Stratégies adaptées à vos objectifs</div>
                  <div className="highlight-item">✓ Suivi continu et conseils d'optimisation</div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="service-intro__visual service-intro__visual--blue">
                <div className="service-big-icon">
                  <img src={financeImg} alt="Finance" className="service-intro__image" />
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
              <h2 className="section-title">Notre Approche</h2>
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
              <h2 className="section-title">Nos Services Financiers</h2>
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
            <h2 className="section-title">Prêt à optimiser votre gestion financière ?</h2>
            <p className="section-subtitle" style={{ marginBottom: '32px' }}>
              Contactez-nous pour une première consultation gratuite.
            </p>
            <Link to="/contact" className="btn btn-primary">Demander une consultation</Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
