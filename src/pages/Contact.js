import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import './Contact.css';

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact — OVA Service Plus';
  }, []);

  const [form, setForm] = useState({ nom: '', email: '', telephone: '', objet: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nom || !form.email || !form.message) {
      setError('Veuillez remplir tous les champs obligatoires.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Accueil</Link>
            <span>›</span>
            <span>Contact</span>
          </div>
          <h1>Contactez-nous</h1>
          <p>Notre équipe est à votre disposition pour répondre à toutes vos questions.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          {/* Contact Info */}
          <ScrollReveal direction="left">
            <aside className="contact-info">
              <h2 className="section-title" style={{ fontSize: '1.5rem' }}>Nos Coordonnées</h2>
              <div className="accent-line" />

              <div className="contact-info__item">
                <div className="contact-info__icon" style={{ background: 'rgba(26,58,107,0.1)', color: 'var(--blue-dark)' }}>✉️</div>
                <div>
                  <div className="contact-info__label">Email</div>
                  <a href="mailto:info@ovaserviceplus.com" className="contact-info__value" id="contact-email">
                    info@ovaserviceplus.com
                  </a>
                </div>
              </div>

              <div className="contact-info__item">
                <div className="contact-info__icon" style={{ background: 'rgba(232,119,34,0.1)', color: 'var(--orange)' }}>📞</div>
                <div>
                  <div className="contact-info__label">Téléphone</div>
                  <a href="tel:+237000000000" className="contact-info__value" id="contact-phone">
                    À fournir par le client
                  </a>
                </div>
              </div>

              <div className="contact-info__item">
                <div className="contact-info__icon" style={{ background: 'rgba(46,127,193,0.1)', color: 'var(--blue-sky)' }}>📍</div>
                <div>
                  <div className="contact-info__label">Adresse</div>
                  <div className="contact-info__value" id="contact-address">
                    2e étage, immeuble blanc face école les champignons<br />
                    Ntem-assi / Ngousso<br />
                    Yaoundé 5e, Cameroun
                  </div>
                </div>
              </div>

              <div className="contact-info__item">
                <div className="contact-info__icon" style={{ background: 'rgba(26,58,107,0.08)', color: 'var(--blue-dark)' }}>🌐</div>
                <div>
                  <div className="contact-info__label">Présence</div>
                  <div className="contact-info__value">Cameroun · Canada</div>
                </div>
              </div>

              <div className="contact-map">
                <iframe
                  title="OVA Service Plus - Localisation Yaoundé"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15927.43870986432!2d11.5071!3d3.8667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf7a309a7f0f%3A0x7e1a2e2e697f5a67!2sNgousso%2C%20Yaound%C3%A9%2C%20Cameroon!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                  width="100%"
                  height="200"
                  style={{ border: 0, borderRadius: 'var(--radius)', marginTop: '24px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </aside>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right">
            <div className="contact-form-wrapper">
              <h2 className="section-title" style={{ fontSize: '1.5rem' }}>Envoyez-nous un message</h2>
              <div className="accent-line" />

              {submitted ? (
                <div className="contact-success" role="alert">
                  <div className="contact-success__icon">✅</div>
                  <h3>Message envoyé !</h3>
                  <p>Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais à <strong>{form.email}</strong>.</p>
                  <button className="btn btn-outline" onClick={() => { setSubmitted(false); setForm({ nom: '', email: '', telephone: '', objet: '', message: '' }); }} style={{ marginTop: '16px' }}>
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate aria-label="Formulaire de contact">
                  {error && <div className="contact-form__error" role="alert">{error}</div>}

                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <label htmlFor="contact-nom">Nom complet <span aria-hidden="true">*</span></label>
                      <input id="contact-nom" type="text" name="nom" value={form.nom} onChange={handleChange} placeholder="Votre nom et prénom" required autoComplete="name" />
                    </div>
                    <div className="contact-form__field">
                      <label htmlFor="contact-email-field">Email <span aria-hidden="true">*</span></label>
                      <input id="contact-email-field" type="email" name="email" value={form.email} onChange={handleChange} placeholder="votre@email.com" required autoComplete="email" />
                    </div>
                  </div>

                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <label htmlFor="contact-telephone">Téléphone</label>
                      <input id="contact-telephone" type="tel" name="telephone" value={form.telephone} onChange={handleChange} placeholder="+237 000 000 000" autoComplete="tel" />
                    </div>
                    <div className="contact-form__field">
                      <label htmlFor="contact-objet">Objet</label>
                      <select id="contact-objet" name="objet" value={form.objet} onChange={handleChange}>
                        <option value="">Sélectionnez un objet</option>
                        <option value="formation">Demande de formation</option>
                        <option value="accompagnement">Accompagnement de projet</option>
                        <option value="eie">Étude d'impact environnemental</option>
                        <option value="devis">Demande de devis</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                  </div>

                  <div className="contact-form__field">
                    <label htmlFor="contact-message">Message <span aria-hidden="true">*</span></label>
                    <textarea id="contact-message" name="message" value={form.message} onChange={handleChange} placeholder="Décrivez votre projet ou votre demande..." rows="6" required />
                  </div>

                  <button type="submit" className="btn btn-primary" id="contact-submit" style={{ width: '100%', justifyContent: 'center' }}>
                    Envoyer le message →
                  </button>
                  <p style={{ fontSize: '0.8rem', color: 'var(--gray)', marginTop: '12px', textAlign: 'center' }}>
                    * Champs obligatoires. Vos données sont traitées de manière confidentielle.
                  </p>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
