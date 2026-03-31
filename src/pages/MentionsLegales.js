import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import camerounImg from '../img/cameroun.webp';
import canadaImg from '../img/canada.webp';

export default function MentionsLegales() {
  useEffect(() => {
    document.title = 'Mentions légales — OVA Service Plus';
  }, []);

  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Accueil</Link>
            <span>›</span>
            <span>Mentions légales</span>
          </div>
          <h1>Mentions Légales</h1>
          <p>Informations légales relatives au site web d'OVA Service Plus.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <article style={{ lineHeight: 1.8, color: 'var(--text-dark)' }}>

              <h2 style={{ color: 'var(--blue-dark)', marginBottom: '8px', fontSize: '1.3rem' }}>1. Éditeur du site</h2>
              <div className="accent-line" />
              <p style={{ marginBottom: '8px' }}><strong>Raison sociale :</strong> OVA Service Plus</p>
              <p style={{ marginBottom: '8px' }}><strong>Adresse :</strong> Deuxième étage, immeuble blanc face école les champignons, Ntem-assi / Ngousso, Yaoundé 5e, Cameroun</p>
              <p style={{ marginBottom: '8px' }}><strong>Email :</strong> <a href="mailto:info@ovaserviceplus.com" style={{ color: 'var(--blue-sky)' }}>info@ovaserviceplus.com</a></p>
              <p style={{ marginBottom: '32px' }}>
                <strong>Présence :</strong>
                <span style={{ display: 'inline-flex', gap: '8px', alignItems: 'center', marginLeft: '8px' }}>
                  <img src={camerounImg} alt="Cameroun" style={{ height: '20px', borderRadius: '4px' }} />
                  <span>Cameroun</span>
                  <span>/</span>
                  <img src={canadaImg} alt="Canada" style={{ height: '20px', borderRadius: '4px' }} />
                  <span>Canada</span>
                </span>
              </p>

              <h2 style={{ color: 'var(--blue-dark)', marginBottom: '8px', fontSize: '1.3rem' }}>2. Prestataire de développement</h2>
              <div className="accent-line" />
              <p style={{ marginBottom: '32px' }}>Ce site a été développé par <strong>Antygravity</strong>, prestataire désigné par OVA Service Plus.</p>

              <h2 style={{ color: 'var(--blue-dark)', marginBottom: '8px', fontSize: '1.3rem' }}>3. Propriété intellectuelle</h2>
              <div className="accent-line" />
              <p style={{ marginBottom: '32px' }}>L'ensemble des contenus présents sur ce site (textes, images, logos, graphismes) est la propriété exclusive d'OVA Service Plus ou de ses partenaires. Toute reproduction, même partielle, est interdite sans autorisation préalable écrite.</p>

              <h2 style={{ color: 'var(--blue-dark)', marginBottom: '8px', fontSize: '1.3rem' }}>4. Protection des données personnelles</h2>
              <div className="accent-line" />
              <p style={{ marginBottom: '16px' }}>OVA Service Plus s'engage à protéger les données personnelles collectées via le formulaire de contact conformément aux législations en vigueur. Les informations recueillies sont exclusivement utilisées pour traiter votre demande et ne sont jamais transmises à des tiers.</p>
              <p style={{ marginBottom: '32px' }}>Vous disposez d'un droit d'accès, de modification et de suppression de vos données en contactant : <a href="mailto:info@ovaserviceplus.com" style={{ color: 'var(--blue-sky)' }}>info@ovaserviceplus.com</a>.</p>

              <h2 style={{ color: 'var(--blue-dark)', marginBottom: '8px', fontSize: '1.3rem' }}>5. Hébergement</h2>
              <div className="accent-line" />
              <p style={{ marginBottom: '32px' }}>Ce site est hébergé sur une infrastructure sécurisée avec certificat SSL (HTTPS). Les informations relatives à l'hébergeur sont disponibles sur demande.</p>

              <h2 style={{ color: 'var(--blue-dark)', marginBottom: '8px', fontSize: '1.3rem' }}>6. Responsabilité</h2>
              <div className="accent-line" />
              <p style={{ marginBottom: '32px' }}>OVA Service Plus s'efforce de maintenir les informations de ce site à jour et exactes. Toutefois, la société ne saurait être tenue responsable des erreurs ou omissions dans les informations diffusées, ni des dommages résultant de l'utilisation du site.</p>

              <h2 style={{ color: 'var(--blue-dark)', marginBottom: '8px', fontSize: '1.3rem' }}>7. Cookies</h2>
              <div className="accent-line" />
              <p style={{ marginBottom: '32px' }}>Ce site peut utiliser des cookies fonctionnels pour améliorer l'expérience utilisateur. Aucun cookie de traçage publicitaire n'est utilisé sans consentement préalable.</p>

              <div style={{ padding: '20px 24px', background: 'var(--bg-section)', borderRadius: 'var(--radius)', borderLeft: '4px solid var(--blue-sky)', marginTop: '8px' }}>
                <p style={{ fontSize: '0.9rem', color: 'var(--gray)' }}>
                  <strong>Dernière mise à jour :</strong> Mars 2026
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
