import { useState } from 'react';
import styles from './CaseStudies.module.css';

interface CaseStudy {
    id: string;
    title: string;
    description: string;
    extendedDescription: string;
    imageUrl: string;
}

const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'Project Alpha',
      description: 'Innovative solution for streamlining workflow processes.',
      extendedDescription: 'Project Alpha revolutionized the workflow for a major corporation, resulting in a 40% increase in productivity and a 25% reduction in operational costs. Our team implemented cutting-edge AI technology to automate routine tasks, freeing up employees to focus on high-value activities.',
      imageUrl: '/images/case-study-1.jpg',
    },
    {
      id: '2',
      title: 'Beta Transformation',
      description: 'Digital transformation for a leading retail chain.',
      extendedDescription: `The Beta Transformation project involved a complete overhaul of a
      national retail chain's digital infrastructure. We implemented a new e-commerce platform,
      modernized in-store technology, and created a seamless omnichannel experience. This resulted
      in a 50% increase in online sales and a 30% improvement in customer satisfaction scores.`,
      imageUrl: '/images/case-study-2.jpg',
    },
    {
      id: '3',
      title: 'Gamma Tech Integration',
      description: 'Seamless integration of cutting-edge technologies.',
      extendedDescription: 'For Gamma Tech, we integrated IoT sensors, blockchain, and machine learning algorithms to create a next-generation supply chain management system. This integration improved inventory accuracy by 99.9%, reduced waste by 35%, and increased overall supply chain efficiency by 28%.',
      imageUrl: '/images/case-study-3.jpg',
    },
  ];

const CaseStudies: React.FC = () => {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const toggleExpand = (id: string) => {
      setExpandedId(expandedId === id ? null : id);
    };

    return (
      <section className={styles.caseStudies}>
        <h2>Case Studies</h2>
        <div className={styles.content}>
          <div className={styles.grid}>
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className={`${styles.card} ${expandedId === study.id ? styles.expanded : ''}`}
              >

                <img
                    src={`https://picsum.photos/seed/${study.title}/200/200`}
                    alt={study.title}
                    className={styles.image}
                />
                <h3 className={styles.studyTitle}>{study.title}</h3>
                <p className={styles.description}>
                  {expandedId === study.id ? study.extendedDescription : study.description}
                </p>
                <button
                  onClick={() => toggleExpand(study.id)}
                  className={styles.link}
                >
                  {expandedId === study.id ? 'Read Less' : 'Read More'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default CaseStudies;
