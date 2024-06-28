import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Team from './components/Team';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default App;