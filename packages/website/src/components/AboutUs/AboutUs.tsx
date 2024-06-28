// AboutUs.tsx
import React from 'react';
import styles from './AboutUs.module.css';

const AboutUs: React.FC = () => {
  return (
    <div className={styles.aboutUs}>
      <h2>About Chan-Ko LLC</h2>
      <div className={styles.content}>
        <div className={styles.description}>
          <p>
            Chan-Ko LLC is a cutting-edge consultancy at the intersection of technology and entertainment. 
            We bring together expertise in both fields to deliver innovative solutions that captivate audiences 
            and drive business growth.
          </p>
          <p>
            With years of experience in software development, statistical analysis, artificial intelligence,
            content creation, and media production, our team is uniquely positioned to help clients navigate
            the rapidly evolving digital landscape.
          </p>
        </div>
        <div className={styles.highlights}>
          <div className={styles.highlight}>
            <h3>Technology Expertise</h3>
            <ul>
              <li>Fractional CTO Services</li>
              <li>Cloud Computing & Big Data</li>
              <li>Artificial Intelligence & Machine Learning</li>
              <li>Blockchain & Cryptocurrency</li>
            </ul>
          </div>
          <div className={styles.highlight}>
            <h3>Entertainment Focus</h3>
            <ul>
              <li>Digital Content Creation</li>
              <li>Streaming Platforms</li>
              <li>Interactive Media</li>
              <li>Gaming & eSports</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;