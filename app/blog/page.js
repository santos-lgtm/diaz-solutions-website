import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Link from 'next/link';
import styles from './page.module.css';
import { posts } from './posts';

export const metadata = {
  title: 'Blog — Diaz Solutions',
  description: 'Payment industry insights, tips, and news from the Diaz Solutions team and Rocco the Resourceful.',
};

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
            <div className="eyebrow">Insights &amp; News</div>
            <h1 className="section-title">
              The Diaz Solutions <span className="gradient-text">Blog</span>
            </h1>
            <p className="section-sub">
              Payment tips, industry guides, and expert advice — straight from Rocco's desk.
            </p>
          </div>

          <div className={styles.postsGrid}>
            {posts.map(p => (
              <Link key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration: 'none' }}>
                <article className={`${styles.postCard} glass-card`}>
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
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
