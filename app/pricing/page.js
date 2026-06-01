import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Pricing — Diaz Solutions',
  description: 'Transparent, fair pricing for Diaz Solutions payment processing. No hidden fees, no surprises.',
};

const plans = [
  {
    name: 'Starter',
    price: '0',
    period: '/month',
    desc: 'Perfect for new businesses just getting started with payments.',
    features: ['Up to $10k/mo volume', '2.9% + 30¢ per transaction', 'All major cards', 'Basic dashboard', 'Email support', 'Standard payouts'],
    cta: 'Start Free',
    featured: false,
  },
  {
    name: 'Growth',
    price: '49',
    period: '/month',
    desc: 'For growing businesses that need more power and lower rates.',
    features: ['Up to $100k/mo volume', '2.4% + 25¢ per transaction', 'All payment methods', 'Advanced analytics', 'Priority support', 'Next-day payouts', 'Fraud protection suite', 'API access'],
    cta: 'Get Started',
    featured: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'Tailored solutions for high-volume and enterprise-level businesses.',
    features: ['Unlimited volume', 'Custom rates', 'Dedicated account manager', 'White-label options', 'Custom integrations', 'SLA guarantee', '24/7 phone support', 'Quarterly reviews'],
    cta: 'Contact Sales',
    featured: false,
  },
];

export default function Pricing() {
  return (
    <>
      <Nav />
      <main style={{ minHeight: '100vh', position: 'relative', zIndex: 1 }}>
        <div className="section">
          <div className="section-head">
            <div className="eyebrow">Transparent Pricing</div>
            <h1 className="section-title">
              Simple Plans, <span className="gradient-text">No Surprises</span>
            </h1>
            <p className="section-sub">
              Choose the plan that fits your business. Upgrade or downgrade any time.
            </p>
          </div>

          <div className={styles.plansGrid}>
            {plans.map(p => (
              <div key={p.name} className={`${styles.planCard} glass-card ${p.featured ? styles.featured : ''}`}>
                {p.badge && <div className={styles.badge}>{p.badge}</div>}
                <div className={styles.planName}>{p.name}</div>
                <div className={styles.planPrice}>
                  {p.price === 'Custom' ? (
                    <span className={styles.priceNum}>Custom</span>
                  ) : (
                    <>
                      <span className={styles.priceCurr}>$</span>
                      <span className={styles.priceNum}>{p.price}</span>
                      <span className={styles.pricePer}>{p.period}</span>
                    </>
                  )}
                </div>
                <p className={styles.planDesc}>{p.desc}</p>
                <ul className={styles.planFeatures}>
                  {p.features.map(f => (
                    <li key={f} className={styles.planFeature}>
                      <span className={styles.check}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={p.featured ? 'btn-primary' : 'btn-ghost'}
                  style={{ width: '100%', justifyContent: 'center', marginTop: 'auto' }}
                  id={`pricing-${p.name.toLowerCase()}`}
                >
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>

          <p className={styles.note}>
            All plans include SSL encryption, 99.99% uptime SLA, and Rocco's seal of approval 🦝
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
