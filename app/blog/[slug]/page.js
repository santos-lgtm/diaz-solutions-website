import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import { posts } from '../posts';
import { notFound } from 'next/navigation';
import styles from './page.module.css';

export async function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find(p => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — Diaz Solutions Blog`,
    description: post.excerpt,
  };
}

const categoryColors = {
  Industry: '#5BADFF',
  Tips: '#FFD23F',
  Security: '#ff6b6b',
  Growth: '#4cd080',
  Product: '#2E5BFF',
};

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = posts.find(p => p.slug === slug);
  if (!post) notFound();

  const otherPosts = posts.filter(p => p.slug !== slug).slice(0, 3);

  return (
    <>
      <Nav />
      <main style={{ minHeight: '100vh', position: 'relative', zIndex: 1 }}>
        <div className="section" style={{ maxWidth: '760px' }}>

          {/* Back link */}
          <Link href="/blog" className={styles.backLink}>
            ← Back to Blog
          </Link>

          {/* Header */}
          <div style={{ marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '12px', fontWeight: 700, color: categoryColors[post.category] || 'var(--ds-cyan)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                {post.category}
              </span>
              <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'inline-block' }} />
              <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>{post.date}</span>
              <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'inline-block' }} />
              <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>🕐 {post.readTime}</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 900, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '20px' }}>
              {post.title}
            </h1>
            <p style={{ fontSize: '18px', lineHeight: 1.65, color: 'rgba(255,255,255,0.6)' }}>{post.excerpt}</p>
          </div>

          {/* Divider */}
          <div style={{ height: '1px', background: 'linear-gradient(90deg, rgba(91,173,255,0.3), transparent)', marginBottom: '48px' }} />

          {/* Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', paddingBottom: '80px' }}>
            {post.content.map((block, i) => {
              if (block.type === 'intro') return (
                <p key={i} style={{ fontSize: '17px', lineHeight: 1.75, color: 'rgba(255,255,255,0.75)', fontStyle: 'italic', borderLeft: '3px solid var(--ds-blue)', paddingLeft: '20px' }}>
                  {block.text}
                </p>
              );
              if (block.type === 'heading') return (
                <h2 key={i} style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 800, color: '#fff', marginTop: '12px', letterSpacing: '-0.01em' }}>
                  {block.text}
                </h2>
              );
              if (block.type === 'paragraph') return (
                <p key={i} style={{ fontSize: '16px', lineHeight: 1.8, color: 'rgba(255,255,255,0.68)' }}>
                  {block.text}
                </p>
              );
              if (block.type === 'cta') return (
                <div key={i} style={{ background: 'rgba(46,91,255,0.1)', border: '1px solid rgba(46,91,255,0.3)', borderRadius: '16px', padding: '28px 32px', marginTop: '16px' }}>
                  <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'rgba(255,255,255,0.8)', marginBottom: '20px' }}>💡 {block.text}</p>
                  <Link href="/contact" className="btn-primary" style={{ fontSize: '14px' }}>
                    Get a Free Consultation →
                  </Link>
                </div>
              );
              return null;
            })}
          </div>

          {/* Author card */}
          <div style={{ background: 'rgba(13,26,53,0.6)', border: '1px solid rgba(91,173,255,0.12)', borderRadius: '16px', padding: '24px 28px', display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '80px' }}>
            <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--ds-blue), var(--ds-cyan))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', flexShrink: 0 }}>🦝</div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#fff', fontSize: '15px' }}>Rocco the Resourceful™</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', marginTop: '2px' }}>Fintech Mascot &amp; Payment Strategist at Diaz Solutions</div>
            </div>
          </div>

          {/* More posts */}
          {otherPosts.length > 0 && (
            <div style={{ paddingBottom: '80px' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '24px' }}>More from the Blog</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {otherPosts.map(p => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className={styles.relatedCard}>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: categoryColors[p.category] || 'var(--ds-cyan)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>{p.category}</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>{p.title}</div>
                    <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)' }}>{p.readTime}</div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
