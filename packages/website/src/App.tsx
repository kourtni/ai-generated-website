import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default App;