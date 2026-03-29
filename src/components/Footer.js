import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.jpg';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__top">
        <div className="container footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <img src={logo} alt="OVA Service Plus" className="footer__logo" />
            <p className="footer__tagline">
              Pour un développement durable, conforme et efficace.
            </p>
            <div className="footer__presence">
              <span>📍 Cameroun</span>
              <span>🌐 Canada</span>
            </div>
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
                <span className="footer__contact-icon">✉️</span>
                <a href="mailto:info@ovaserviceplus.com">info@ovaserviceplus.com</a>
              </li>
              <li>
                <span className="footer__contact-icon">📍</span>
                <span>2e étage, immeuble blanc face école les champignons, Ntem-assi / Ngousso, Yaoundé 5e, Cameroun</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {currentYear} OVA Service Plus. Tous droits réservés.</p>
          <p>Développé par <span className="footer__dev">Antygravity</span></p>
        </div>
      </div>
    </footer>
  );
}
