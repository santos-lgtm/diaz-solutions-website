import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Blog — Diaz Solutions',
  description: 'Payment industry insights, tips, and news from the Diaz Solutions team and Rocco the Resourceful.',
};

const posts = [
  {
    date: 'May 28, 2026',
    category: 'Industry',
    title: '5 Ways to Reduce Chargebacks in 2026',
    excerpt: 'Chargebacks cost businesses billions every year. Here\'s how Diaz Solutions clients have dramatically reduced dispute rates.',
    readTime: '5 min read',
  },
  {
    date: 'May 20, 2026',
    category: 'Product',
    title: 'Introducing Real-Time Analytics Dashboard',
    excerpt: 'Our new analytics suite gives you instant visibility into every transaction, trend, and anomaly across your business.',
    readTime: '3 min read',
  },
  {
    date: 'May 12, 2026',
    category: 'Tips',
    title: 'Rocco\'s Guide to Choosing a Payment Processor',
    excerpt: "Not all processors are created equal. Rocco breaks down exactly what to look for before you sign any agreement.",
    readTime: '7 min read',
  },
  {
    date: 'May 5, 2026',
    category: 'Security',
    title: 'PCI-DSS 4.0: What Businesses Need to Know',
    excerpt: 'The new PCI-DSS 4.0 standard is here. We break down what changed and how Diaz Solutions keeps you compliant automatically.',
    readTime: '6 min read',
  },
  {
    date: 'Apr 28, 2026',
    category: 'Growth',
    title: 'How Global Payments Can Unlock New Revenue Streams',
    excerpt: 'Accepting payments in 150+ currencies isn\'t just a feature — it\'s a growth strategy. Here\'s the playbook.',
    readTime: '4 min read',
  },
  {
    date: 'Apr 18, 2026',
    category: 'Product',
    title: 'Tap-to-Pay Is Now Live for All Plans',
    excerpt: 'Every Diaz Solutions merchant can now accept contactless payments on any NFC-enabled device. Here\'s how to enable it.',
    readTime: '2 min read',
  },
];

const categoryColors = {
  Industry: '#5BADFF',
  Product: '#2E5BFF',
  Tips: '#FFD23F',
  Security: '#ff6b6b',
  Growth: '#4cd080',
};

export default function Blog() {
  return (
    <>
      <Nav />
      <main style={{ minHeight: '100vh', position: 'relative', zIndex: 1 }}>
        <div className="section">
          <div className="section-head">
            <div className="eyebrow">Insights & News</div>
            <h1 className="section-title">
              The Diaz Solutions <span className="gradient-text">Blog</span>
            </h1>
            <p className="section-sub">
              Payment tips, product updates, and industry news — straight from Rocco's desk.
            </p>
          </div>

          <div className={styles.postsGrid}>
            {posts.map(p => (
              <article key={p.title} className={`${styles.postCard} glass-card`}>
                <div className={styles.postMeta}>
                  <span className={styles.postCat} style={{ color: categoryColors[p.category] || 'var(--ds-cyan)' }}>
                    {p.category}
                  </span>
                  <span className={styles.postDate}>{p.date}</span>
                </div>
                <h2 className={styles.postTitle}>{p.title}</h2>
                <p className={styles.postExcerpt}>{p.excerpt}</p>
                <div className={styles.postFooter}>
                  <span className={styles.readTime}>🕐 {p.readTime}</span>
                  <span className={styles.readMore}>Read More →</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
