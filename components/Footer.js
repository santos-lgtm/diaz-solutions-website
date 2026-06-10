import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const footerLinks = {
  Services: [
    { href: '/services', label: 'Card Processing' },
    { href: '/services', label: 'POS Systems' },
    { href: '/services', label: 'E-Commerce Payments' },
    { href: '/services', label: 'ACH & eCheck' },
    { href: '/services', label: 'High-Risk Accounts' },
    { href: '/pricing', label: 'Pricing' },
  ],
  Company: [
    { href: '/about', label: 'About Us' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ],
  Legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
  ],
};

const socials = [
  { href: 'https://www.linkedin.com/in/santos-diaz-3abb87289/', label: 'LinkedIn', icon: '🔗' },
  { href: 'https://www.instagram.com/santosdiaz.us/', label: 'Instagram', icon: '📸' },
  { href: 'https://www.facebook.com/santos.diaz.22936', label: 'Facebook', icon: '👥' },
  { href: 'https://x.com/diazsolutions', label: 'X / Twitter', icon: '𝕏' },
  { href: 'https://www.reddit.com/user/PaymentsDude/', label: 'Reddit', icon: '🤖' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Brand col */}
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <Image src="/logo.png" alt="Diaz Solutions" width={48} height={48} className={styles.logoImg} />
            <span className={styles.logoText}>Diaz Solutions</span>
          </Link>
          <p className={styles.tagline}>
            Merchant service consulting &amp; payment solutions for businesses of all sizes — powered by Rocco the Resourceful.
          </p>

          {/* Contact info */}
          <div className={styles.contactInfo}>
            <a href="tel:6317475508" className={styles.contactRow}>
              <span className={styles.contactIcon}>📞</span> (631) 747-5508
            </a>
            <a href="mailto:santos@diazsolutions.us" className={styles.contactRow}>
              <span className={styles.contactIcon}>📧</span> santos@diazsolutions.us
            </a>
            <div className={styles.contactRow}>
              <span className={styles.contactIcon}>📍</span> Long Island, NY
            </div>
          </div>

          {/* Social links */}
          <div className={styles.socials}>
            {socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                className={styles.socialBtn} aria-label={s.label} title={s.label}>
                {s.icon}
              </a>
            ))}
          </div>

          <div className={styles.roccoWrap}>
            <Image src="/rocco.png" alt="Rocco the Resourceful" width={80} height={92} className={styles.rocco} />
            <div className={styles.roccoBubble}>
              <span>Rocco the Resourceful™</span>
            </div>
          </div>
        </div>

        {Object.entries(footerLinks).map(([group, links]) => (
          <div key={group} className={styles.col}>
            <h4 className={styles.colHead}>{group}</h4>
            <ul className={styles.colList}>
              {links.map(l => (
                <li key={l.label}>
                  <Link href={l.href} className={styles.colLink}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} Diaz Solutions. All rights reserved. · Long Island, NY</span>
        <span className={styles.bottomRight}>Built with 🦝 by Rocco the Resourceful</span>
      </div>
    </footer>
  );
}
