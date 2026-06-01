import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const footerLinks = {
  Company: [
    { href: '/about', label: 'About Us' },
    { href: '/blog', label: 'Blog' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
  ],
  Services: [
    { href: '/services', label: 'Payment Processing' },
    { href: '/services', label: 'Business Solutions' },
    { href: '/services', label: 'Integrations' },
    { href: '/pricing', label: 'Pricing' },
  ],
  Legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/privacy', label: 'Terms of Service' },
  ],
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <Image src="/logo.png" alt="Diaz Solutions" width={48} height={48} className={styles.logoImg} />
            <span className={styles.logoText}>Diaz Solutions</span>
          </Link>
          <p className={styles.tagline}>
            Resourceful payment solutions for modern businesses. Meet Rocco — your fintech partner.
          </p>
          <div className={styles.roccoWrap}>
            <Image src="/rocco.jpg" alt="Rocco the Resourceful" width={80} height={80} className={styles.rocco} />
            <div className={styles.roccoBubble}>
              <span>Rocco the Resourceful</span>
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
        <span>© {new Date().getFullYear()} Diaz Solutions. All rights reserved.</span>
        <span className={styles.bottomRight}>Built with 🦝 by Rocco the Resourceful</span>
      </div>
    </footer>
  );
}
