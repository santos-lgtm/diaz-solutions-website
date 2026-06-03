'use client';
import { useState } from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Image from 'next/image';
import styles from './page.module.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
      } else {
        setErrorMsg(data.error || 'Something went wrong.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Network error. Please try again.');
      setStatus('error');
    }
  };

  return (
    <>
      <Nav />
      <main style={{ minHeight: '100vh', position: 'relative', zIndex: 1 }}>
        <div className="section">
          <div className="section-head">
            <div className="eyebrow">Get In Touch</div>
            <h1 className="section-title">
              Let's Talk <span className="gradient-text">Payments</span>
            </h1>
            <p className="section-sub">
              Ready to get started? Have questions? Rocco and the team are here to help.
            </p>
          </div>

          <div className={styles.contactLayout}>
            {/* Form */}
            <div className={`${styles.formWrap} glass-card`}>
              {status === 'success' ? (
                <div className={styles.success}>
                  <div className={styles.successIcon}>🦝</div>
                  <h2 className={styles.successTitle}>Rocco Got Your Message!</h2>
                  <p className={styles.successDesc}>We'll be in touch within 1 business day. Thanks for reaching out!</p>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit} id="contact-form">
                  <h2 className={styles.formTitle}>Send Us a Message</h2>
                  <div className={styles.formRow}>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="contact-name">Full Name</label>
                      <input id="contact-name" className={styles.input} type="text" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="contact-email">Email Address</label>
                      <input id="contact-email" className={styles.input} type="email" name="email" placeholder="you@company.com" value={form.email} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="contact-company">Company</label>
                    <input id="contact-company" className={styles.input} type="text" name="company" placeholder="Your company name" value={form.company} onChange={handleChange} />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="contact-message">Message</label>
                    <textarea id="contact-message" className={`${styles.input} ${styles.textarea}`} name="message" placeholder="Tell us about your payment needs..." value={form.message} onChange={handleChange} required rows={5} />
                  </div>
                  {status === 'error' && (
                    <p style={{ color: '#ff6b6b', fontSize: '14px', margin: '0 0 12px' }}>⚠️ {errorMsg}</p>
                  )}
                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', opacity: status === 'sending' ? 0.7 : 1 }} id="contact-submit" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending...' : 'Send Message →'}
                  </button>
                </form>
              )}
            </div>

            {/* Info panel */}
            <div className={styles.infoPanel}>
              <div className={`${styles.roccoCard} glass-card`}>
                <Image src="/rocco.png" alt="Rocco the Resourceful" width={120} height={138} className={styles.roccoImg} />
                <div className={styles.roccoInfo}>
                  <div className={styles.roccoName}>Rocco the Resourceful™</div>
                  <div className={styles.roccoSub}>Your Diaz Solutions Partner</div>
                  <p className={styles.roccoQuote}>"I'll find the right solution for your business — that's a Rocco promise."</p>
                </div>
              </div>
              <div className={`${styles.contactDetail} glass-card`}>
                <div className={styles.detailItem}>
                  <span className={styles.detailIcon}>📧</span>
                  <div>
                    <div className={styles.detailLabel}>Email</div>
                    <div className={styles.detailValue}>santos@diazsolutions.us</div>
                  </div>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailIcon}>📞</span>
                  <div>
                    <div className={styles.detailLabel}>Phone</div>
                    <div className={styles.detailValue}>(631) 747-5508</div>
                  </div>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailIcon}>📍</span>
                  <div>
                    <div className={styles.detailLabel}>Location</div>
                    <div className={styles.detailValue}>Long Island, NY</div>
                  </div>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailIcon}>⚡</span>
                  <div>
                    <div className={styles.detailLabel}>Response Time</div>
                    <div className={styles.detailValue}>Within 1 business day</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
