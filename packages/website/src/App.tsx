import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Team from './components/Team';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="team">
          <Team />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;