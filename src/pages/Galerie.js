import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import './About.css';

const images = [
  { src: require('../img/galerie/un.png'), alt: 'Galerie 1' },
  { src: require('../img/galerie/deux.png'), alt: 'Galerie 2' },
  { src: require('../img/galerie/trois.png'), alt: 'Galerie 3' },
  { src: require('../img/galerie/quatre.png'), alt: 'Galerie 4' },
];

export default function Galerie() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    document.title = 'Galerie — APAD Environnement';
  }, []);

  const openImage = (image) => setSelectedImage(image);
  const closeImage = () => setSelectedImage(null);

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
                <button
                  type="button"
                  className="about-team-card gallery-card"
                  onClick={() => openImage(image)}
                  aria-label={`Agrandir ${image.alt}`}
                >
                  <img src={image.src} alt={image.alt} className="gallery-card__image" />
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label="Aperçu de l'image" onClick={closeImage}>
          <button type="button" className="gallery-lightbox__close" onClick={closeImage} aria-label="Fermer l'image">
            ×
          </button>
          <div className="gallery-lightbox__content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.alt} className="gallery-lightbox__image" />
            <p className="gallery-lightbox__caption">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
}
