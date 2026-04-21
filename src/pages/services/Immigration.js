import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../../components/ScrollReveal';
import canadaImg from '../../img/canada.webp';
import chineImg from '../../img/chine.png';
import belgiqueImg from '../../img/belgique.jpg';
import '../ServicePage.css';

const destinations = [
  { name: 'Canada', image: canadaImg, flag: 'https://flagcdn.com/w320/ca.png', description: 'Opportunités professionnelles et académiques au Canada.' },
  { name: 'États-Unis', image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=800&auto=format&fit=crop', flag: 'https://flagcdn.com/w320/us.png', description: 'Visa de travail et processus d’immigration pour les USA.' },
  { name: 'France', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop', flag: 'https://flagcdn.com/w320/fr.png', description: 'Accompagnement pour vos démarches en France.' },
  { name: 'Belgique', image: belgiqueImg, flag: belgiqueImg, description: 'Vivre et travailler au cœur de l’Europe.' },
  { name: 'Chine', image: chineImg, flag: chineImg, description: 'Immersion et opportunités dans l’économie chinoise.' },
  { name: 'Russie', image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?q=80&w=800&auto=format&fit=crop', flag: 'https://flagcdn.com/w320/ru.png', description: 'Accompagnement pour l’immigration en Russie.' },
  { name: 'EAU', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop', flag: 'https://flagcdn.com/w320/ae.png', description: 'Expatriation vers Dubaï et les Émirats Arabes Unis.' },
];

export default function Immigration() {
  useEffect(() => {
    document.title = "Immigration & Mobilité Internationale — APAD";
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
            <span>Immigration</span>
          </div>
          <h1>Immigration & Mobilité</h1>
          <p>Une passerelle vers de nouveaux horizons professionnels et personnels.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-intro">
            <ScrollReveal direction="left">
              <div className="service-intro__text">
                <h2 className="section-title">Votre projet d'immigration, notre expertise</h2>
                <div className="accent-line" />
                <p className="section-subtitle">
                  Nous mettons nos clients en relation avec les professionnels autorisés en immigration dans plusieurs pays, notamment :
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginBottom: '24px' }}>
                  {destinations.map((d, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'white', padding: '6px 12px', borderRadius: '30px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', border: '1px solid #eee' }}>
                      <img src={d.flag} alt={d.name} style={{ width: '20px', height: 'auto', borderRadius: '2px' }} />
                      <span style={{ fontSize: '0.85rem', fontWeight: '500', color: 'var(--blue-dark)' }}>{d.name}</span>
                    </div>
                  ))}
                </div>
                <div className="service-intro__highlights">
                  {[
                    'Partenariats avec des consultants agréés',
                    'Accompagnement personnalisé de A à Z',
                    'Multiples destinations mondiales',
                    'Gestion documentaire rigoureuse'
                  ].map((item, i) => (
                    <div className="service-highlight" key={i}>
                      <span className="service-highlight__icon">✈️</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="service-intro__visual service-intro__visual--blue" style={{ overflow: 'hidden' }}>
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1200&auto=format&fit=crop" 
                  alt="Immigration" 
                  className="service-intro__image" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <ScrollReveal direction="up">
            <div className="text-center" style={{ marginBottom: '40px' }}>
              <h2 className="section-title">Destinations & Partenariats</h2>
              <div className="accent-line-center" />
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                Nous vous accompagnons vers les destinations les plus prisées au monde.
              </p>
            </div>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '30px' }}>
            {destinations.map((d, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 100}>
                <div style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', height: '100%' }}>
                  <img src={d.image} alt={d.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                  <div style={{ padding: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                      <img src={d.flag} alt={`Drapeau ${d.name}`} style={{ width: '32px', height: 'auto', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} />
                      <h3 style={{ margin: 0, color: 'var(--blue-dark)' }}>{d.name}</h3>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--gray)', lineHeight: '1.6' }}>{d.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ScrollReveal direction="fade">
        <section className="service-cta-banner service-cta-banner--blue">
          <div className="container service-cta-banner__inner">
            <div>
              <h2>Prêt pour une nouvelle aventure ?</h2>
              <p>Contactez-nous pour être mis en relation avec nos partenaires experts en immigration.</p>
            </div>
            <Link to="/contact" className="btn btn-primary" id="immigration-cta">
              Parler à un expert
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
