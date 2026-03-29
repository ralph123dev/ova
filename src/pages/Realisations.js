import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const projects = [
  {
    title: "Étude d'impact — Projet minier, Région de l'Est",
    category: "Étude d'impact",
    desc: "Réalisation d'une EIE complète pour un projet d'exploitation minière, incluant l'analyse des risques et le plan de gestion environnementale.",
    tags: ['EIE', 'Environnement', 'Mines'],
    icon: '⛏️',
    color: 'blue',
  },
  {
    title: 'Formation en gestion de projet — PME de Yaoundé',
    category: 'Formation',
    desc: "Programme de formation de 5 jours sur la gestion de projet et le management pour 30 cadres d'entreprises partenaires.",
    tags: ['Formation', 'Management', 'PME'],
    icon: '🎓',
    color: 'orange',
  },
  {
    title: 'Accompagnement structuration — ONG environnementale',
    category: 'Accompagnement',
    desc: "Montage administratif, structuration juridique et accompagnement opérationnel d'une ONG spécialisée en protection des zones humides.",
    tags: ['ONG', 'Structuration', 'Conseil'],
    icon: '🤝',
    color: 'sky',
  },
  {
    title: 'Audit environnemental — Usine agroalimentaire',
    category: "Étude d'impact",
    desc: "Audit complet des pratiques environnementales d'une usine de transformation agroalimentaire avec plan de mise en conformité.",
    tags: ['Audit', 'Agroalimentaire', 'Conformité'],
    icon: '🔍',
    color: 'blue',
  },
  {
    title: 'Formation développement durable — Institution publique',
    category: 'Formation',
    desc: "Sensibilisation et formation sur les enjeux du développement durable pour 60 agents d'une administration publique camerounaise.",
    tags: ['Formation', 'Secteur public', 'DD'],
    icon: '🌱',
    color: 'orange',
  },
  {
    title: 'Plan de gestion environnementale — Projet routier',
    category: "Étude d'impact",
    desc: "Élaboration d'un Plan de Gestion Environnementale et Sociale (PGES) pour un projet de réhabilitation routière en zone rurale.",
    tags: ['PGES', 'Infrastructures', 'Rural'],
    icon: '🛣️',
    color: 'sky',
  },
];

const colorMap = {
  blue: { bg: 'rgba(26,58,107,0.08)', color: 'var(--blue-dark)' },
  orange: { bg: 'rgba(232,119,34,0.08)', color: 'var(--orange)' },
  sky: { bg: 'rgba(46,127,193,0.08)', color: 'var(--blue-sky)' },
};

export default function Realisations() {
  useEffect(() => {
    document.title = 'Réalisations — OVA Service Plus';
  }, []);

  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Accueil</Link>
            <span>›</span>
            <span>Réalisations</span>
          </div>
          <h1>Nos Réalisations</h1>
          <p>Découvrez quelques exemples de projets menés avec succès.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal direction="up">
            <div className="text-center" style={{ marginBottom: '48px' }}>
              <h2 className="section-title">Références &amp; Projets</h2>
              <div className="accent-line-center" />
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                Plus de 200 projets réalisés au Cameroun et en Afrique centrale. Voici un aperçu de notre expertise.
              </p>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '28px' }}>
            {projects.map((p, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 100}>
                <article className="card" style={{ padding: '28px', height: '100%' }}>
                  <div style={{
                    width: '56px', height: '56px', borderRadius: '14px',
                    background: colorMap[p.color].bg,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.6rem', marginBottom: '18px'
                  }}>
                    {p.icon}
                  </div>
                  <div style={{
                    display: 'inline-block', padding: '4px 12px', borderRadius: '50px',
                    background: colorMap[p.color].bg, color: colorMap[p.color].color,
                    fontSize: '0.78rem', fontWeight: 600, marginBottom: '12px'
                  }}>
                    {p.category}
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--blue-dark)', marginBottom: '10px', lineHeight: 1.4 }}>
                    {p.title}
                  </h3>
                  <p style={{ color: 'var(--gray)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '18px' }}>
                    {p.desc}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {p.tags.map((tag, j) => (
                      <span key={j} style={{
                        padding: '3px 10px', borderRadius: '50px',
                        background: 'var(--bg-section)', color: 'var(--gray)',
                        fontSize: '0.78rem', fontWeight: 500
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="fade" delay={200}>
            <div className="text-center" style={{ marginTop: '56px' }}>
              <p style={{ color: 'var(--gray)', marginBottom: '20px' }}>
                Ces projets ne sont qu'un aperçu de notre expertise. Contactez-nous pour en savoir plus.
              </p>
              <Link to="/contact" className="btn btn-primary" id="realisations-cta">
                Discuter de votre projet
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
