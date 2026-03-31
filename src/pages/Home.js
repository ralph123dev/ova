import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import camerounImg from '../img/cameroun.webp';
import canadaImg from '../img/canada.webp';
import './Home.css';

const services = [
  {
    icon: '🎓',
    title: 'Formations',
    desc: "Programmes de formation adaptés aux professionnels et organisations sur l'environnement, le développement durable et le management de projet.",
    link: '/services/formation',
    color: 'blue',
  },
  {
    icon: '🤝',
    title: 'Accompagnement',
    desc: "Un suivi personnalisé à chaque étape du développement de votre projet : montage, conseil réglementaire et appui opérationnel.",
    link: '/services/accompagnement',
    color: 'orange',
  },
  {
    icon: '🌿',
    title: "Études d'impact",
    desc: "Réalisation d'études d'impact environnemental complètes, d'audits et de suivis de conformité conformes aux normes en vigueur.",
    link: '/services/etudes-impact',
    color: 'sky',
  },
];

const stats = [
  { number: '10+', label: "Années d'expérience" },
  { number: '200+', label: 'Projets réalisés' },
  { number: '50+', label: 'Clients satisfaits' },
  { number: '2', label: 'Pays de présence' },
];

const values = [
  { icon: '🏆', title: 'Excellence', desc: "Nous visons l'excellence dans chaque mission en nous appuyant sur des expertises reconnues." },
  { icon: '🌱', title: 'Durabilité', desc: "Chaque projet est conçu pour respecter l'environnement et contribuer au développement durable." },
  { icon: '🔍', title: 'Rigueur', desc: "Nos études et conseils s'appuient sur des analyses rigoureuses et des méthodes éprouvées." },
  { icon: '🤝', title: 'Proximité', desc: 'Nous construisons des relations de confiance durables avec nos clients et partenaires.' },
];

export default function Home() {
  const statsRef = useRef(null);

  useEffect(() => {
    document.title = "OVA Service Plus — Formation, Accompagnement & Études d'impact";
  }, []);

  return (
    <div className="home">
      {/* ===================== HERO ===================== */}
      <section className="home-hero" aria-label="Section héro">
        <div className="home-hero__bg-shapes">
          <div className="shape shape-1" />
          <div className="shape shape-2" />
          <div className="shape shape-3" />
        </div>
        <div className="container home-hero__content">
          <div className="home-hero__text">
            <div className="home-hero__badge">
              <img src={camerounImg} alt="Cameroun" className="badge-flag" />
              <span>Cameroun &amp; Canada</span>
              <img src={canadaImg} alt="Canada" className="badge-flag" />
            </div>
            <h1 className="home-hero__title">
              La solution à vos besoins
            </h1>
            <p className="home-hero__subtitle">
              OVA Service Plus accompagne entreprises et particuliers dans leurs projets à travers des formations, du conseil et des études d'impact environnemental.
            </p>
            <div className="home-hero__actions">
              <Link to="/contact" className="btn btn-primary" id="hero-cta-contact">
                Démarrer un projet →
              </Link>
              <Link to="/a-propos" className="btn btn-secondary" id="hero-cta-about">
                Découvrir OVA
              </Link>
            </div>
          </div>
          <div className="home-hero__visual">
            <div className="home-hero__card-stack">
              <div className="hero-card hero-card--back">
                <div className="hero-card__tag">🌿 Environnement</div>
              </div>
              <div className="hero-card hero-card--front">
                <div className="hero-card__icon">🎓</div>
                <div className="hero-card__label">Formation &amp; Conseil</div>
                <div className="hero-card__sub">Experts certifiés</div>
              </div>
              <div className="hero-badge hero-badge--1">✅ Normes en vigueur</div>
              <div className="hero-badge hero-badge--2">📊 Études complètes</div>
            </div>
          </div>
        </div>
        <div className="home-hero__wave">
          <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ===================== STATS ===================== */}
      <section className="home-stats" ref={statsRef} aria-label="Chiffres clés">
        <div className="container home-stats__grid">
          {stats.map((s, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 100}>
              <div className="home-stats__item">
                <div className="home-stats__number">{s.number}</div>
                <div className="home-stats__label">{s.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ===================== SERVICES ===================== */}
      <section className="section" aria-labelledby="services-heading">
        <div className="container">
          <ScrollReveal direction="up">
            <div className="text-center">
              <h2 className="section-title" id="services-heading">Nos Expertises</h2>
              <div className="accent-line-center" />
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                Conseil · Finance · Comptabilité · Gestion des Projets · Environnement · Bureautique · Formation
              </p>
            </div>
          </ScrollReveal>
          <div className="home-services__grid">
            {services.map((s, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 150}>
                <div className={`home-service-card home-service-card--${s.color}`}>
                  <div className="home-service-card__icon">{s.icon}</div>
                  <h3 className="home-service-card__title">{s.title}</h3>
                  <p className="home-service-card__desc">{s.desc}</p>
                  <Link to={s.link} className="home-service-card__link" id={`service-link-${i}`}>
                    En savoir plus <span>→</span>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WHY US ===================== */}
      <section className="section section-alt" aria-labelledby="values-heading">
        <div className="container">
          <div className="home-why__layout">
            <ScrollReveal direction="left">
              <div className="home-why__left">
                <h2 className="section-title" id="values-heading">Pourquoi choisir OVA Service Plus ?</h2>
                <div className="accent-line" />
                <p className="section-subtitle">
                  Nous combinons expertise locale et standards internationaux pour offrir des solutions concrètes, durables et adaptées à votre réalité.
                </p>
                <Link to="/a-propos" className="btn btn-outline" id="why-cta" style={{ marginTop: '24px' }}>
                  Notre histoire
                </Link>
              </div>
            </ScrollReveal>
            <div className="home-why__right">
              {values.map((v, i) => (
                <ScrollReveal key={i} direction="right" delay={i * 120}>
                  <div className="home-value-card">
                    <div className="home-value-card__icon">{v.icon}</div>
                    <div>
                      <h3 className="home-value-card__title">{v.title}</h3>
                      <p className="home-value-card__desc">{v.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CTA BANNER ===================== */}
      <ScrollReveal direction="fade">
        <section className="home-cta-banner" aria-label="Appel à l'action">
          <div className="container home-cta-banner__inner">
            <div>
              <h2>Prêt à démarrer votre projet ?</h2>
              <p>Contactez-nous dès aujourd'hui pour une consultation gratuite.</p>
            </div>
            <div className="home-cta-banner__actions">
              <Link to="/contact" className="btn btn-primary" id="banner-cta">
                Nous contacter
              </Link>
              <Link to="/realisations" className="btn btn-secondary" id="banner-realisations">
                Voir nos réalisations
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
