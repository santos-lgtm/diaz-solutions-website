import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Portfolio — Diaz Solutions',
  description: 'Case studies and success stories from businesses powered by Diaz Solutions payment processing.',
};

const cases = [
  {
    client: 'RetailMax Inc.',
    industry: 'E-Commerce',
    result: '+38% revenue',
    desc: 'RetailMax integrated Diaz Solutions checkout and saw immediate improvement in conversion rates and reduced cart abandonment.',
    tags: ['Payment Gateway', 'Analytics', 'Mobile'],
  },
  {
    client: 'NovaBuild Co.',
    industry: 'Construction',
    result: '40% cost savings',
    desc: 'By switching from their legacy processor to Diaz Solutions, NovaBuild cut payment processing costs while improving cash flow.',
    tags: ['ACH Payments', 'Custom Integration'],
  },
  {
    client: 'PulseStore',
    industry: 'Fashion / DTC',
    result: '2x checkout speed',
    desc: 'PulseStore\'s mobile-first checkout powered by Diaz Solutions doubled conversion on mobile devices.',
    tags: ['Mobile SDK', 'Fraud Protection'],
  },
  {
    client: 'SkyRoute Logistics',
    industry: 'Logistics',
    result: '99.8% auth rate',
    desc: 'High-volume B2B invoice payments processed reliably with near-perfect authorization rates.',
    tags: ['API', 'B2B Payments', 'Enterprise'],
  },
  {
    client: 'MediTrack',
    industry: 'Healthcare',
    result: 'PCI Compliant Day 1',
    desc: 'Achieved full PCI-DSS compliance on launch day thanks to Diaz Solutions\' built-in security infrastructure.',
    tags: ['Compliance', 'Security', 'HIPAA'],
  },
  {
    client: 'GreenLeaf Market',
    industry: 'Grocery / Local',
    result: '$500k processed in 30 days',
    desc: 'GreenLeaf launched same-day payment with tap-to-pay and saw explosive early adoption.',
    tags: ['Tap-to-Pay', 'Mobile', 'POS'],
  },
];

export default function Portfolio() {
  return (
    <>
      <Nav />
      <main style={{ minHeight: '100vh', position: 'relative', zIndex: 1 }}>
        <div className="section">
          <div className="section-head">
            <div className="eyebrow">Case Studies</div>
            <h1 className="section-title">
              Real Results, <span className="gradient-text">Real Businesses</span>
            </h1>
            <p className="section-sub">
              See how businesses across industries have leveled up their payments with Diaz Solutions.
            </p>
          </div>

          <div className={styles.caseGrid}>
            {cases.map(c => (
              <div key={c.client} className={`${styles.caseCard} glass-card`}>
                <div className={styles.caseHeader}>
                  <div>
                    <div className={styles.caseClient}>{c.client}</div>
                    <div className={styles.caseIndustry}>{c.industry}</div>
                  </div>
                  <div className={styles.caseResult}>{c.result}</div>
                </div>
                <p className={styles.caseDesc}>{c.desc}</p>
                <div className={styles.caseTags}>
                  {c.tags.map(t => <span key={t} className={styles.caseTag}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', paddingTop: '40px', paddingBottom: '60px' }}>
            <Link href="/contact" className="btn-primary" id="portfolio-cta">Become a Success Story →</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
