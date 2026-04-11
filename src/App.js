import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Formation from './pages/services/Formation';
import Accompagnement from './pages/services/Accompagnement';
import EtudesImpact from './pages/services/EtudesImpact';
import Finance from './pages/services/Finance';
import Comptabilite from './pages/services/Comptabilite';
import GestionProjet from './pages/services/GestionProjet';
import Environnement from './pages/services/Environnement';
import Bureautique from './pages/services/Bureautique';
import Immigration from './pages/services/Immigration';
import Realisations from './pages/Realisations';
import Contact from './pages/Contact';
import MentionsLegales from './pages/MentionsLegales';
import './index.css';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/services/formation" element={<Formation />} />
          <Route path="/services/accompagnement" element={<Accompagnement />} />
          <Route path="/services/etudes-impact" element={<EtudesImpact />} />
          <Route path="/services/finance" element={<Finance />} />
          <Route path="/services/comptabilite" element={<Comptabilite />} />
          <Route path="/services/gestion-projet" element={<GestionProjet />} />
          <Route path="/services/environnement" element={<Environnement />} />
          <Route path="/services/bureautique" element={<Bureautique />} />
          <Route path="/services/immigration" element={<Immigration />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
