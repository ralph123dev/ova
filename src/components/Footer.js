import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__top">
        <div className="container footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <img src={logo} alt="APAD Environnement" className="footer__logo" />
            <p className="footer__tagline">
              APAD la solution est là !
            </p>
          </div>

          {/* Services */}
          <div className="footer__col">
            <h3 className="footer__col-title">Nos Services</h3>
            <ul className="footer__links">
              <li><Link to="/services/formation">Formations professionnelles</Link></li>
              <li><Link to="/services/accompagnement">Accompagnement de projets</Link></li>
              <li><Link to="/services/etudes-impact">Études d'impact environnemental</Link></li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="footer__col">
            <h3 className="footer__col-title">Navigation</h3>
            <ul className="footer__links">
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/a-propos">À propos</Link></li>
              <li><Link to="/galerie">Galerie</Link></li>
              <li><Link to="/realisations">Réalisations</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/mentions-legales">Mentions légales</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h3 className="footer__col-title">Contact</h3>
            <ul className="footer__contact-list">
              <li>
                <span className="footer__contact-icon"><ion-icon name="mail-outline"></ion-icon></span>
                <a href="mailto:contact@apasite.com">contact@apasite.com</a>
              </li>
              <li>
                <span className="footer__contact-icon"><ion-icon name="call-outline"></ion-icon></span>
                <a href="tel:+237670875501">+237 670 875 501</a>
              </li>
              <li>
                <span className="footer__contact-icon"><ion-icon name="location-outline"></ion-icon></span>
                <span>2e étage, immeuble blanc face école les champignons, Ntem-assi / Ngousso, Yaoundé 5e, Cameroun</span>
              </li>
            </ul>
            <div className="footer__social">
              <h4 className="footer__social-title">Suivez-nous</h4>
              <div className="footer__social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
                <a href="https://wa.me/237670875501" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="WhatsApp">
                  <ion-icon name="logo-whatsapp"></ion-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>APAD la solution est là !</p>
        </div>
      </div>
    </footer>
  );
}
