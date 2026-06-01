import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Privacy Policy — Diaz Solutions',
  description: 'Diaz Solutions privacy policy. Learn how we collect, use, and protect your personal and payment data.',
};

export default function Privacy() {
  return (
    <>
      <Nav />
      <main style={{ minHeight: '100vh', position: 'relative', zIndex: 1 }}>
        <div className="section" style={{ maxWidth: '800px' }}>
          <div className="section-head" style={{ textAlign: 'left' }}>
            <div className="eyebrow">Legal</div>
            <h1 className="section-title">Privacy Policy</h1>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', marginTop: '8px' }}>Last updated: June 1, 2026</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px', paddingBottom: '80px' }}>
            {[
              {
                title: '1. Information We Collect',
                content: 'We collect information you provide directly to us, such as when you create an account, process a payment, or contact us for support. This includes name, email address, payment information, business details, and transaction data.'
              },
              {
                title: '2. How We Use Your Information',
                content: 'We use the information we collect to provide, maintain, and improve our services; process transactions; send transactional and promotional communications; monitor and analyze usage patterns; and comply with legal obligations.'
              },
              {
                title: '3. Payment Data Security',
                content: 'All payment data is encrypted using TLS 1.3 and stored in PCI-DSS Level 1 compliant infrastructure. We never store raw card numbers. Sensitive cardholder data is tokenized immediately upon capture.'
              },
              {
                title: '4. Information Sharing',
                content: 'We do not sell your personal information. We may share information with service providers who assist us in operating our platform, with your consent, or when required by law. Any third-party partners are bound by strict data processing agreements.'
              },
              {
                title: '5. Cookies & Tracking',
                content: 'We use cookies and similar tracking technologies to enhance your experience, analyze usage, and deliver relevant content. You may control cookie preferences through your browser settings.'
              },
              {
                title: '6. Data Retention',
                content: 'We retain personal data for as long as necessary to provide our services and comply with legal obligations. Transaction records are retained for a minimum of 7 years as required by financial regulations.'
              },
              {
                title: '7. Your Rights',
                content: 'Depending on your location, you may have the right to access, correct, or delete your personal data; restrict or object to processing; and data portability. Contact us at privacy@diazsolutions.com to exercise these rights.'
              },
              {
                title: '8. Contact Us',
                content: 'If you have any questions about this Privacy Policy, please contact us at: privacy@diazsolutions.com or Diaz Solutions, Inc., [Address], United States.'
              },
            ].map(s => (
              <div key={s.title} style={{
                background: 'rgba(13,26,53,0.5)',
                border: '1px solid rgba(91,173,255,0.1)',
                borderRadius: '16px',
                padding: '28px 32px',
              }}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>{s.title}</h2>
                <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,0.65)' }}>{s.content}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
