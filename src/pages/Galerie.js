import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import './About.css';

const images = [
  { src: require('../img/galerie/un.png'), alt: 'Galerie 1' },
  { src: require('../img/galerie/deux.png'), alt: 'Galerie 2' },
  { src: require('../img/galerie/trois.png'), alt: 'Galerie 3' },
];

export default function Galerie() {
  useEffect(() => {
    document.title = 'Galerie — APAD Environnement';
  }, []);

  return (
    <div className="about">
      <section className="page-hero" aria-label="Galerie">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Accueil</Link>
            <span>›</span>
            <span>Galerie</span>
          </div>
          <h1>Galerie</h1>
          <p>Quelques images de nos réalisations et activités.</p>
        </div>
      </section>

      <section className="section" aria-labelledby="gallery-heading">
        <div className="container">
          <ScrollReveal direction="up">
            <div className="text-center">
              <h2 className="section-title" id="gallery-heading">Nos images</h2>
              <div className="accent-line-center" />
            </div>
          </ScrollReveal>

          <div className="about-team__grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
            {images.map((image, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <div className="about-team-card" style={{ padding: 0, overflow: 'hidden' }}>
                  <img src={image.src} alt={image.alt} style={{ width: '100%', height: '240px', objectFit: 'cover', display: 'block' }} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
