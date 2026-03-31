import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../img/logo.jpg';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [location]);

  const isServicesActive = location.pathname.startsWith('/services');

  const handleMobileMenuClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="banner">
      <div className="container navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo" aria-label="OVA Service Plus — Accueil">
          <img src={logo} alt="OVA Service Plus" />
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar__nav" role="navigation" aria-label="Navigation principale">
          <NavLink to="/" className={({ isActive }) => isActive ? 'navbar__link active' : 'navbar__link'} end>
            Accueil
          </NavLink>
          <NavLink to="/a-propos" className={({ isActive }) => isActive ? 'navbar__link active' : 'navbar__link'}>
            À propos
          </NavLink>

          {/* Services Dropdown */}
          <div
            className={`navbar__dropdown${isServicesActive ? ' active' : ''}`}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className={`navbar__link navbar__dropdown-trigger${isServicesActive ? ' active' : ''}`} aria-haspopup="true" aria-expanded={servicesOpen}>
              Nos Services <span className="arrow">▾</span>
            </button>
            <div className={`navbar__dropdown-menu${servicesOpen ? ' open' : ''}`} role="menu">
              <Link to="/services/formation" className="navbar__dropdown-item" role="menuitem">
                <span className="dropdown-icon">🎓</span> Formations
              </Link>
              <Link to="/services/accompagnement" className="navbar__dropdown-item" role="menuitem">
                <span className="dropdown-icon">🤝</span> Accompagnement
              </Link>
              <Link to="/services/etudes-impact" className="navbar__dropdown-item" role="menuitem">
                <span className="dropdown-icon">🌿</span> Études d'impact
              </Link>
            </div>
          </div>

          <NavLink to="/realisations" className={({ isActive }) => isActive ? 'navbar__link active' : 'navbar__link'}>
            Réalisations
          </NavLink>
        </nav>

        {/* CTA */}
        <Link to="/contact" className="navbar__cta btn btn-primary" id="navbar-cta">
          Nous contacter
        </Link>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu Backdrop */}
      {menuOpen && (
        <div
          className="navbar__backdrop"
          onClick={handleMobileMenuClick}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <div className={`navbar__mobile${menuOpen ? ' open' : ''}`} role="dialog" aria-label="Menu mobile">
        <button
          className="navbar__mobile-close"
          onClick={() => setMenuOpen(false)}
          aria-label="Fermer le menu"
        >
          ✕
        </button>
        <nav>
          <NavLink to="/" className="navbar__mobile-link" end onClick={handleMobileMenuClick}>Accueil</NavLink>
          <NavLink to="/a-propos" className="navbar__mobile-link" onClick={handleMobileMenuClick}>À propos</NavLink>
          <div className="navbar__mobile-section">
            <span className="navbar__mobile-section-title">Nos Services</span>
            <NavLink to="/services/formation" className="navbar__mobile-link navbar__mobile-link--sub" onClick={handleMobileMenuClick}>🎓 Formations</NavLink>
            <NavLink to="/services/accompagnement" className="navbar__mobile-link navbar__mobile-link--sub" onClick={handleMobileMenuClick}>🤝 Accompagnement</NavLink>
            <NavLink to="/services/etudes-impact" className="navbar__mobile-link navbar__mobile-link--sub" onClick={handleMobileMenuClick}>🌿 Études d'impact</NavLink>
          </div>
          <NavLink to="/realisations" className="navbar__mobile-link" onClick={handleMobileMenuClick}>Réalisations</NavLink>
          <NavLink to="/contact" className="navbar__mobile-link" onClick={handleMobileMenuClick}>Contact</NavLink>
          <Link to="/contact" className="btn btn-primary" style={{ marginTop: '16px', display: 'block', textAlign: 'center' }} onClick={handleMobileMenuClick}>
            Nous contacter
          </Link>
        </nav>
      </div>
    </header>
  );
}
