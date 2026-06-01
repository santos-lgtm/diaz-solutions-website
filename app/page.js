'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import styles from './page.module.css';

// Scroll reveal hook
function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const features = [
  {
    icon: '⚡',
    title: 'Instant Processing',
    desc: 'Lightning-fast transactions processed in milliseconds. Keep your business moving without delays.',
  },
  {
    icon: '🛡️',
    title: 'Bank-Grade Security',
    desc: 'End-to-end encryption, PCI-DSS compliant infrastructure, and real-time fraud detection.',
  },
  {
    icon: '🌐',
    title: 'Global Reach',
    desc: 'Accept payments in 150+ currencies across 60+ countries. Expand without borders.',
  },
  {
    icon: '📊',
    title: 'Smart Analytics',
    desc: 'Real-time dashboards and insights to understand your revenue and customer behavior.',
  },
  {
    icon: '🔗',
    title: 'Easy Integration',
    desc: 'Connect with your existing tools in minutes. APIs, plugins, and no-code options available.',
  },
  {
    icon: '🎯',
    title: 'Custom Solutions',
    desc: 'Tailored payment flows built around your business — not the other way around.',
  },
];

const steps = [
  { num: '01', title: 'Sign Up Free', desc: 'Create your account in minutes. No credit card, no commitment.' },
  { num: '02', title: 'Connect & Configure', desc: 'Integrate our API or use our no-code dashboard to set up payment flows.' },
  { num: '03', title: 'Start Earning', desc: 'Go live and accept payments from anywhere in the world instantly.' },
];

const testimonials = [
  { name: 'Maria C.', role: 'CEO, TechStart LLC', quote: 'Diaz Solutions transformed how we handle payments. Rocco\'s team is incredibly resourceful!', stars: 5 },
  { name: 'James R.', role: 'CFO, NovaBuild Co.', quote: 'Switching to Diaz Solutions saved us 40% on processing fees. The analytics alone are worth it.', stars: 5 },
  { name: 'Aisha T.', role: 'Founder, PulseStore', quote: 'The onboarding was seamless. We were live in under a day. Outstanding support.', stars: 5 },
];

const brands = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay', 'Google Pay', 'ACH', 'Wire'];

export default function Home() {
  useReveal();

  return (
    <>
      <Nav />
      <main className={styles.main}>

        {/* ── HERO ── */}
        <section className={styles.hero}>
          <div className={styles.heroGlow} aria-hidden="true" />
          <div className={styles.heroContent}>
            <div className="eyebrow">🦝 Rocco the Resourceful is here</div>
            <h1 className={styles.heroTitle}>
              Payments That Work<br />
              <span className="gradient-text">As Hard As You Do</span>
            </h1>
            <p className={styles.heroSub}>
              Diaz Solutions delivers fast, secure, and resourceful payment processing for businesses of all sizes. Accept more, worry less.
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact" className="btn-primary" id="hero-cta">
                Get Started Free →
              </Link>
              <Link href="/services" className="btn-ghost" id="hero-services">
                Explore Services
              </Link>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNum}>$2B+</span>
                <span className={styles.statLabel}>Processed</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNum}>99.99%</span>
                <span className={styles.statLabel}>Uptime</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNum}>150+</span>
                <span className={styles.statLabel}>Countries</span>
              </div>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.heroCard} aria-hidden="true">
              <div className={styles.cardGlow} />
              <div className={styles.cardHeader}>
                <span className={styles.cardLabel}>Total Revenue</span>
                <span className={styles.cardBadge}>↑ 24.8%</span>
              </div>
              <div className={styles.cardAmount}>$128,450.00</div>
              <div className={styles.cardBar}>
                {[60,85,45,90,70,100,55].map((h, i) => (
                  <div key={i} className={styles.bar} style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>
              <div className={styles.cardTx}>
                <span>↑ Last transaction</span>
                <span className={styles.txAmount}>+$3,240</span>
              </div>
            </div>
            <div className={styles.roccoHero}>
              <Image src="/rocco.jpg" alt="Rocco the Resourceful" width={160} height={160} className={styles.roccoImg} priority />
              <div className={styles.roccoTag}>Rocco the Resourceful™</div>
            </div>
          </div>
        </section>

        {/* ── BRANDS ── */}
        <div className={styles.brands}>
          <p className={styles.brandsLabel}>Accepted payment methods</p>
          <div className={styles.brandsRow}>
            {brands.map(b => (
              <div key={b} className={styles.brandPill}>{b}</div>
            ))}
          </div>
        </div>

        {/* ── FEATURES ── */}
        <section className={styles.featuresSection}>
          <div className="section">
            <div className="section-head reveal">
              <div className="eyebrow">What We Offer</div>
              <h2 className="section-title">
                Built for <span className="gradient-text">Modern Business</span>
              </h2>
              <p className="section-sub">
                Every tool you need to accept, manage, and grow your revenue — all in one resourceful platform.
              </p>
            </div>
            <div className={styles.featuresGrid}>
              {features.map((f, i) => (
                <div key={f.title} className={`${styles.featureCard} glass-card reveal`} style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className={styles.featureIcon}>{f.icon}</div>
                  <h3 className={styles.featureTitle}>{f.title}</h3>
                  <p className={styles.featureDesc}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section>
          <div className="section">
            <div className="section-head reveal">
              <div className="eyebrow">Simple Process</div>
              <h2 className="section-title">
                Up & Running in <span className="gradient-text">Minutes</span>
              </h2>
              <p className="section-sub">No complex setup, no lengthy onboarding. Rocco makes it easy.</p>
            </div>
            <div className={styles.stepsRow}>
              {steps.map((s, i) => (
                <div key={s.num} className={`${styles.step} reveal`} style={{ transitionDelay: `${i * 0.15}s` }}>
                  <div className={styles.stepNum}>{s.num}</div>
                  <div className={styles.stepConnector} />
                  <div className={`${styles.stepCard} glass-card`}>
                    <h3 className={styles.stepTitle}>{s.title}</h3>
                    <p className={styles.stepDesc}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ROCCO SECTION ── */}
        <section className={styles.roccoSection}>
          <div className={`${styles.roccoInner} glass-card`}>
            <div className={styles.roccoContent}>
              <div className="eyebrow">Meet Your Partner</div>
              <h2 className={styles.roccoTitle}>
                Say Hello to <span className="gradient-text">Rocco</span>
              </h2>
              <p className={styles.roccoDesc}>
                Rocco the Resourceful is the face of Diaz Solutions — always finding smarter ways to get things done. Like any resourceful raccoon, Rocco knows where the value is and how to get it to you fast.
              </p>
              <Link href="/about" className="btn-primary" id="rocco-learn-more">
                Learn About Us →
              </Link>
            </div>
            <div className={styles.roccoImageWrap}>
              <div className={styles.roccoGlow} aria-hidden="true" />
              <Image
                src="/rocco.jpg"
                alt="Rocco the Resourceful — Diaz Solutions mascot"
                width={340}
                height={340}
                className={styles.roccoLarge}
              />
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section>
          <div className="section">
            <div className="section-head reveal">
              <div className="eyebrow">Client Stories</div>
              <h2 className="section-title">
                Trusted by <span className="gradient-text">Businesses</span>
              </h2>
            </div>
            <div className={styles.testimonialsGrid}>
              {testimonials.map((t, i) => (
                <div key={t.name} className={`${styles.testimonialCard} glass-card reveal`} style={{ transitionDelay: `${i * 0.12}s` }}>
                  <div className={styles.stars}>{'★'.repeat(t.stars)}</div>
                  <p className={styles.quote}>"{t.quote}"</p>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.authorAvatar}>{t.name[0]}</div>
                    <div>
                      <div className={styles.authorName}>{t.name}</div>
                      <div className={styles.authorRole}>{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <section className={styles.ctaSection}>
          <div className={`${styles.ctaInner} glass-card`}>
            <div className={styles.ctaGlow} aria-hidden="true" />
            <div className="eyebrow">Ready to Launch?</div>
            <h2 className={styles.ctaTitle}>
              Start Processing Payments<br />
              <span className="gradient-text">Today — For Free</span>
            </h2>
            <p className={styles.ctaSub}>
              No setup fees. No hidden costs. Just resourceful payments powered by Diaz Solutions.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className="btn-primary" id="cta-start">
                Get Started Free →
              </Link>
              <Link href="/pricing" className="btn-ghost" id="cta-pricing">
                View Pricing
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
