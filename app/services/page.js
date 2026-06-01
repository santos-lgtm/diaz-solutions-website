import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Services — Diaz Solutions',
  description: 'Diaz Solutions offers merchant service consulting and payment solutions including credit card processing, POS systems, ACH, e-commerce, high-risk accounts, and more.',
};

const services = [
  {
    icon: '💳',
    title: 'Credit & Debit Card Processing',
    desc: 'Accept all major credit and debit cards with industry-leading approval rates and real-time processing for your business.',
    features: ['Visa, Mastercard, Amex, Discover', 'Real-time authorization', 'Competitive interchange rates', 'Next-day funding available'],
  },
  {
    icon: '🏦',
    title: 'Merchant Account Setup',
    desc: 'We handle the full merchant account setup process — from application to approval — so you can start accepting payments fast.',
    features: ['Fast approvals', 'Personalized guidance', 'All business types', 'Ongoing account support'],
  },
  {
    icon: '🖥️',
    title: 'POS Systems & Payment Terminals',
    desc: 'Modern point-of-sale systems and payment terminals that fit your counter, your staff, and your customers.',
    features: ['Countertop & wireless terminals', 'Smart POS systems', 'Receipt printers & cash drawers', 'Staff management tools'],
  },
  {
    icon: '📱',
    title: 'Mobile Payment Solutions',
    desc: 'Take payments on the go with mobile card readers and smartphone-based payment apps — perfect for pop-ups, events, and field sales.',
    features: ['Mobile card readers', 'iOS & Android apps', 'Tap-to-pay (NFC)', 'Works anywhere with signal'],
  },
  {
    icon: '💻',
    title: 'Virtual Terminals',
    desc: 'Accept payments by phone or email with a secure virtual terminal — no card present required. Great for phone orders and invoices.',
    features: ['Browser-based access', 'Manual card entry', 'No hardware needed', 'Secure & PCI compliant'],
  },
  {
    icon: '🛒',
    title: 'E-Commerce Payment Processing',
    desc: 'Seamlessly accept online payments on your website with secure, fast checkout experiences that convert visitors into customers.',
    features: ['Hosted checkout pages', 'Shopping cart integrations', 'Recurring billing support', '150+ currencies'],
  },
  {
    icon: '🔗',
    title: 'Payment Gateway Setup & Integrations',
    desc: 'We set up and integrate payment gateways with your existing software, website, or app — no technical headaches.',
    features: ['Authorize.net, NMI & more', 'Shopify / WooCommerce', 'CRM & ERP integrations', 'API & webhook support'],
  },
  {
    icon: '🏧',
    title: 'ACH & eCheck Processing',
    desc: 'Accept bank-to-bank ACH payments and eChecks at a fraction of the cost of card processing — ideal for B2B and recurring payments.',
    features: ['Low processing fees', 'Same-day & next-day ACH', 'Recurring ACH billing', 'High-volume friendly'],
  },
  {
    icon: '💰',
    title: 'Dual Pricing & Cash Discount Programs',
    desc: 'Eliminate or drastically reduce your processing fees with compliant dual pricing and cash discount programs.',
    features: ['100% legal & compliant', 'Offset processing costs', 'Customer-facing signage', 'Works with most terminals'],
  },
  {
    icon: '⚡',
    title: 'High-Risk Merchant Accounts',
    desc: 'Specialized merchant accounts for businesses in high-risk industries that traditional processors often decline.',
    features: ['CBD, firearms, travel & more', 'Competitive rates for high-risk', 'Chargeback management', 'Multiple banking options'],
  },
  {
    icon: '🛡️',
    title: 'Chargeback & Fraud Prevention',
    desc: 'Protect your revenue with proactive chargeback alerts, dispute management, and fraud prevention tools.',
    features: ['Chargeback alerts', 'Dispute response support', 'Fraud detection tools', 'Revenue recovery'],
  },
  {
    icon: '🎁',
    title: 'Gift Card & Loyalty Programs',
    desc: 'Increase repeat business and customer lifetime value with branded gift cards and loyalty reward programs.',
    features: ['Custom branded gift cards', 'Digital & physical options', 'Loyalty points system', 'Easy redemption tracking'],
  },
  {
    icon: '🔄',
    title: 'Recurring Billing & Invoicing',
    desc: 'Automate your billing with recurring payment schedules and professional digital invoicing — get paid on time, every time.',
    features: ['Subscription billing', 'Automated invoicing', 'Payment reminders', 'Failed payment retry logic'],
  },
  {
    icon: '📈',
    title: 'Merchant Funding & Working Capital',
    desc: 'Access fast business funding based on your payment processing volume — no lengthy bank applications required.',
    features: ['Merchant cash advances', 'Quick approvals', 'Flexible repayment', 'No fixed monthly payments'],
  },
  {
    icon: '🎯',
    title: 'Business Payment Consulting',
    desc: 'Not sure what you need? We analyze your current setup and help you lower fees, pick the right software, and optimize your payment stack.',
    features: ['Fee audit & analysis', 'Processor comparison', 'Software recommendations', 'Ongoing advisory support'],
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
              Complete <span className="gradient-text">Payment Solutions</span>
            </h1>
            <p className="section-sub">
              Merchant service consulting and payment solutions for businesses of all sizes — from setup to optimization.
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
            <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '20px', fontSize: '16px' }}>
              Not sure which services you need? Let's talk — no pressure, just answers.
            </p>
            <Link href="/contact" className="btn-primary" id="services-cta">Get a Free Consultation →</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
