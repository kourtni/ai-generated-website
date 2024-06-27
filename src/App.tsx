import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Team from './components/Team';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <CaseStudies />
        <Team />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;