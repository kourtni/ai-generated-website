// Header.tsx
import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/chan-ko-water-logo.png" alt="Chan-Ko LLC Logo" />
      </div>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
        <ul>
          <li><a href="#home" onClick={(e) => handleScroll(e, 'home')}>Home</a></li>
          <li><a href="#about" onClick={(e) => handleScroll(e, 'about')}>About</a></li>
          <li><a href="#services" onClick={(e) => handleScroll(e, 'services')}>Services</a></li>
          <li><a href="#case-studies" onClick={(e) => handleScroll(e, 'case-studies')}>Case Studies</a></li>
          <li><a href="#team" onClick={(e) => handleScroll(e, 'team')}>Team</a></li>
          <li><a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contact</a></li>
        </ul>
      </nav>
      <button className={styles.menuToggle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <XIcon /> : <MenuIcon />}
      </button>
    </header>
  );
};

export default Header;
