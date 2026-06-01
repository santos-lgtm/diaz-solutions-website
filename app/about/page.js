import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'About Us — Diaz Solutions',
  description: 'Meet the team behind Diaz Solutions and our mascot Rocco the Resourceful. Learn our story, mission, and values.',
};

const values = [
  { icon: '🦝', title: 'Resourceful', desc: 'We find creative, efficient solutions to every challenge — just like Rocco.' },
  { icon: '🔒', title: 'Trustworthy', desc: 'Your data and money are safe with us. Period.' },
  { icon: '⚡', title: 'Fast', desc: 'We move quickly without sacrificing quality or security.' },
  { icon: '🤝', title: 'Partner-First', desc: "Your success is our success. We're in this together." },
];

export default function About() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <div className={styles.heroGlow} aria-hidden="true" />

        {/* Header */}
        <div className="section">
          <div className="section-head">
            <div className="eyebrow">Our Story</div>
            <h1 className="section-title">
              Driven by <span className="gradient-text">Resourcefulness</span>
            </h1>
            <p className="section-sub">
              Diaz Solutions was built on one core belief: every business deserves access to powerful, affordable, and simple payment tools. We're here to make that happen.
            </p>
          </div>

          {/* Rocco feature */}
          <div className={`${styles.roccoFeature} glass-card`}>
            <div className={styles.roccoLeft}>
              <div className={styles.roccoGlow} aria-hidden="true" />
              <Image src="/rocco.jpg" alt="Rocco the Resourceful" width={300} height={300} className={styles.roccoImg} />
            </div>
            <div className={styles.roccoRight}>
              <div className="eyebrow">Meet the Mascot</div>
              <h2 className={styles.roccoTitle}>Rocco the<br /><span className="gradient-text">Resourceful™</span></h2>
              <p className={styles.roccoDesc}>
                Rocco isn't just our mascot — he's our philosophy. Raccoons are clever, adaptable, and always find a way. That's exactly how we approach payments: with ingenuity, persistence, and a little bit of scrappy determination.
              </p>
              <p className={styles.roccoDesc}>
                When you partner with Diaz Solutions, Rocco's got your back.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className={styles.valuesGrid}>
            {values.map(v => (
              <div key={v.title} className={`${styles.valueCard} glass-card`}>
                <span className={styles.valueIcon}>{v.icon}</span>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className={styles.cta}>
            <h2 className="section-title">Ready to Work With Us?</h2>
            <Link href="/contact" className="btn-primary" id="about-cta">Get in Touch →</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
