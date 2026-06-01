import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Services — Diaz Solutions',
  description: 'Explore Diaz Solutions payment processing services including payment gateways, business tools, integrations, and custom solutions.',
};

const services = [
  {
    icon: '💳',
    title: 'Payment Gateway',
    desc: 'Accept credit cards, debit cards, and digital wallets with industry-leading approval rates and real-time processing.',
    features: ['All major cards accepted', 'Real-time authorization', '150+ currencies', 'Mobile-ready'],
  },
  {
    icon: '🏢',
    title: 'Business Dashboard',
    desc: 'A powerful, intuitive control center for managing transactions, refunds, disputes, and customer data.',
    features: ['Real-time analytics', 'Dispute management', 'Custom reports', 'Team access controls'],
  },
  {
    icon: '🔗',
    title: 'API & Integrations',
    desc: 'Connect Diaz Solutions to any platform. REST APIs, webhooks, and pre-built plugins for popular platforms.',
    features: ['REST API', 'Shopify / WooCommerce', 'Webhooks & events', 'Developer docs'],
  },
  {
    icon: '🛡️',
    title: 'Fraud Protection',
    desc: 'AI-powered fraud detection that learns your business patterns and stops bad actors before they cause damage.',
    features: ['ML fraud scoring', 'Chargeback alerts', '3D Secure 2.0', 'Custom rules engine'],
  },
  {
    icon: '📱',
    title: 'Mobile Payments',
    desc: 'Accept payments anywhere with our mobile SDK and tap-to-pay solutions for iOS and Android.',
    features: ['iOS & Android SDK', 'Tap-to-pay support', 'Offline mode', 'QR payments'],
  },
  {
    icon: '🎯',
    title: 'Custom Solutions',
    desc: 'Need something unique? Our team builds tailored payment flows for enterprise and high-volume businesses.',
    features: ['White-label options', 'Custom checkout UI', 'Volume pricing', 'Dedicated support'],
  },
];

export default function Services() {
  return (
    <>
      <Nav />
      <main style={{ minHeight: '100vh', position: 'relative', zIndex: 1 }}>
        <div className="section">
          <div className="section-head">
            <div className="eyebrow">What We Offer</div>
            <h1 className="section-title">
              Resourceful <span className="gradient-text">Payment Services</span>
            </h1>
            <p className="section-sub">
              Everything your business needs to accept, manage, and grow — under one roof.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map(s => (
              <div key={s.title} className={`${styles.serviceCard} glass-card`}>
                <div className={styles.serviceIcon}>{s.icon}</div>
                <h2 className={styles.serviceTitle}>{s.title}</h2>
                <p className={styles.serviceDesc}>{s.desc}</p>
                <ul className={styles.featureList}>
                  {s.features.map(f => (
                    <li key={f} className={styles.featureItem}>
                      <span className={styles.check}>✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', paddingTop: '40px', paddingBottom: '60px' }}>
            <Link href="/contact" className="btn-primary" id="services-cta">Talk to Our Team →</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
