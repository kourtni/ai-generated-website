import React from 'react';
import styles from './Team.module.css';

// Import images
import chandraImage from '../../assets/images/chandra-erdman.png';
import kourtniImage from '../../assets/images/kourtni-in-chicago-hoodie.jpg';

interface TeamMember {
  name: string;
  role?: string;
  bio: string;
  image?: string;
}

const principals: TeamMember[] = [
  {
    name: "Chandra Erdman, PhD",
    bio: `The first black person to graduate from Yale with a Doctorate in statistics, Chandra is a
    world renown statistician and technology manager. The Bayesian Change Point software package she
    created has been used to study cancer, financial markets, climate change, and more. In addition,
    she has overseen projects for the US Census, Google, MLT, and has helped improve the security of
    over 150 cloud products.`,
    image: chandraImage
  },
  {
    name: "Kourtni Marshall",
    bio: `Kourtni is a veteran technologist, audio engineer, and entrepreneur. His work crosses the
    boundaries between technology, entertainment, and community engagement. He has worked with many
    platinum selling artists and is an alumnus of the Hit Factory, Google, Red Hat, as well as a
    Techstars backed startup that he cofounded.`,
    image: kourtniImage
  },
];

const teamMembers: TeamMember[] = [
  {
    name: "Jane Doe",
    role: "Client Relations",
    bio: "Jane has over 20 years of experience in tech and entertainment."
  },
  {
    name: "John Smith",
    role: "AI/ML Consulting",
    bio: "John is an expert in AI and machine learning technologies."
  },
  {
    name: "Alice Johnson",
    role: "Creative Director",
    bio: "Alice brings 15 years of experience in content creation and strategy."
  },
  {
    name: "Bob Williams",
    role: "Head of Business Development",
    bio: "Bob excels at identifying new opportunities and partnerships."
  },
  {
    name: "Bob Smith",
    role: "Motion Picture Consulting",
    bio: "Bob is an expert in film production and set design."
  },
  {
    name: "Alicia Johns",
    role: "Director of Ducks",
    bio: "Alicia a lot about what ducks like."
  },
  {
    name: "William Evans",
    role: "Prompt Engineer",
    bio: "William is usually very prompt."
  }
];

const Team: React.FC = () => {
  return (
    <section className={styles.team}>
      <h2>Principals</h2>
      <div className={styles.teamGrid}>
        {principals.map((member, index) => (
          <div key={index} className={styles.teamMember}>
            <div className={styles.imageContainer}>
              <img src={member.image} alt={member.name} className={styles.memberImage} />
            </div>
            <h3>{member.name}</h3>
            <p className={styles.role}>{member.role}</p>
            <p className={styles.bio}>{member.bio}</p>
          </div>
        ))}
      </div>
      <h2>Our Team</h2>
      <div className={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.teamMember}>
            <div className={styles.imageContainer}>
                <img 
                src={`https://picsum.photos/seed/${member.name}/200/200`} 
                alt={member.name} 
                className={styles.memberImage} 
                />
            </div>
            <h3>{member.name}</h3>
            <p className={styles.role}>{member.role}</p>
            <p className={styles.bio}>{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;