import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import camerounImg from '../img/cameroun.webp';
import accompagnementImg from '../img/accompagnement.webp';
import etude_impactImg from '../img/etude_impact.jpg';
import financeImg from '../img/finance.jpg';
import comptabiliteImg from '../img/comptabilité.jpg';
import gestion_projetImg from '../img/gestion_de_projet.jpg';
import environnementImg from '../img/environnement.webp';
import bureautiqueImg from '../img/bureautique.jpg';
import formationImg from '../img/formation.jpg';
import './Home.css';

const services = [
  {
    image: formationImg,
    icon: '🎓',
    title: 'Formations',
    desc: "Programmes de formation adaptés aux professionnels et organisations sur l'environnement, le développement durable et le management de projet.",
    link: '/services/formation',
    color: 'blue',
  },
  {
    image: accompagnementImg,
    title: 'Accompagnement',
    desc: "Un suivi personnalisé à chaque étape du développement de votre projet : montage, conseil réglementaire et appui opérationnel.",
    link: '/services/accompagnement',
    color: 'orange',
  },
  {
    image: etude_impactImg,
    title: "Études d'impact",
    desc: "Réalisation d'études d'impact environnemental complètes, d'audits et de suivis de conformité conformes aux normes en vigueur.",
    link: '/services/etudes-impact',
    color: 'sky',
  },
  {
    image: financeImg,
    title: 'Finance',
    desc: "Conseil en gestion financière, analyse budgétaire et optimisation de la structure financière de vos projets et entreprises.",
    link: '/services/finance',
    color: 'blue',
  },
  {
    image: comptabiliteImg,
    title: 'Comptabilité',
    desc: "Services comptables complets, tenue de comptes, audit financier et conseils en conformité réglementaire comptable.",
    link: '/services/comptabilite',
    color: 'orange',
  },
  {
    image: gestion_projetImg,
    title: 'Gestion de Projet',
    desc: "Pilotage et gestion complète de projets, planning, risques et suivi opérationnel pour la réussite de vos initiatives.",
    link: '/services/gestion-projet',
    color: 'sky',
  },
  {
    image: environnementImg,
    title: 'Environnement',
    desc: "Conseils en matière environnementale, plans d'action, audits éco-responsables et accompagnement vers la durabilité.",
    link: '/services/environnement',
    color: 'blue',
  },
  {
    image: bureautiqueImg,
    title: 'Bureautique',
    desc: "Formation et assistance en bureautique, productivité digitale et outils collaboratifs pour optimiser votre performance.",
    link: '/services/bureautique',
    color: 'orange',
  },
];

const stats = [
  { number: '200+', label: 'Projets réalisés' },
  { number: '600', label: 'Clients satisfaits' },
];

const values = [
  { icon: '🏆', title: 'Excellence', desc: "Nous visons l'excellence dans chaque mission en nous appuyant sur des expertises reconnues." },
  { icon: '🌱', title: 'Durabilité', desc: "Chaque projet est conçu pour respecter l'environnement et contribuer au développement durable." },
  { icon: '🔍', title: 'Rigueur', desc: "Nos études et conseils s'appuient sur des analyses rigoureuses et des méthodes éprouvées." },
  { icon: '🤝', title: 'Proximité', desc: 'Nous construisons des relations de confiance durables avec nos clients et partenaires.' },
];

const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const endValue = parseInt(end.replace(/\D/g, ''));
    if (isNaN(endValue)) return;
    
    const increment = endValue / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);

  const suffix = end.replace(/[0-9]/g, '');
  return <>{count}{suffix}</>;
};

export default function Home() {
  const statsRef = useRef(null);

  useEffect(() => {
    document.title = "APAD Environnement — Formation, Accompagnement & Études d'impact";
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
              <span>Cameroun</span>
            </div>
            <h1 className="home-hero__title">
              La solution à vos besoins
            </h1>
            <p className="home-hero__subtitle">
              APAD Environnement accompagne entreprises et particuliers dans leurs projets à travers des formations, du conseil et des études d'impact environnemental.
            </p>
            <div className="home-hero__actions">
              <Link to="/a-propos" className="btn btn-primary" id="hero-cta-about">
                Découvrir APAD Environnement
              </Link>
              <Link to="/contact" className="btn btn-secondary" id="hero-cta-contact">
                Besoin d'expertise
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
                <div className="home-stats__number">
                  <Counter end={s.number} />
                </div>
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
                  <div className="home-service-card__icon">
                    <img src={s.image} alt={s.title} className="home-service-card__image" />
                  </div>
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
                <h2 className="section-title" id="values-heading">Pourquoi choisir APAD Environnement ?</h2>
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
