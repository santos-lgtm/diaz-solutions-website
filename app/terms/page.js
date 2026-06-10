import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Terms of Use — Diaz Solutions',
  description: 'Terms of Use for Diaz Solutions. Learn about your rights and responsibilities when using our website and services.',
};

const sections = [
  {
    title: '1. Terms',
    content: 'By accessing the website at https://diazsolutions.us, you are agreeing to be bound by these Terms of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.',
  },
  {
    title: '2. Use License',
    content: [
      'Permission is granted to temporarily download one copy of the materials (information or software) on the Diaz Global Enterprises LLC website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:',
      '• Modify or copy the materials',
      '• Use the materials for any commercial purpose or for any public display (commercial or non-commercial)',
      '• Attempt to decompile or reverse engineer any software contained on the Diaz Global Enterprises LLC website',
      '• Remove any copyright or other proprietary notations from the materials',
      '• Transfer the materials to another person or "mirror" the materials on any other server',
      'This license shall automatically terminate if you violate any of these restrictions and may be terminated by Diaz Global Enterprises LLC at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.',
    ],
  },
  {
    title: '3. Disclaimer',
    content: 'The materials on the Diaz Global Enterprises LLC website are provided on an "as is" basis. Diaz Global Enterprises LLC makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, Diaz Global Enterprises LLC does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.',
  },
  {
    title: '4. Limitations',
    content: 'In no event shall Diaz Global Enterprises LLC or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the Diaz Global Enterprises LLC website, even if Diaz Global Enterprises LLC or a Diaz Global Enterprises LLC authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.',
  },
  {
    title: '5. Accuracy of Materials',
    content: 'The materials appearing on the Diaz Global Enterprises LLC website could include technical, typographical, or photographic errors. Diaz Global Enterprises LLC does not warrant that any of the materials on its website are accurate, complete, or current. Diaz Global Enterprises LLC may make changes to the materials contained on its website at any time without notice.',
  },
  {
    title: '6. Links',
    content: 'Diaz Global Enterprises LLC has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Diaz Global Enterprises LLC of the site. Use of any such linked website is at the user\'s own risk.',
  },
  {
    title: '7. SMS/Text Messaging Terms of Service',
    content: [
      'Diaz Global Enterprises LLC provides credit card processing and merchant services solutions for businesses. When you opt in to receive text messages from Diaz Global Enterprises LLC, you may receive the following types of SMS communications:',
      '• Appointment confirmations and reminders for scheduled consultations',
      '• Quote and estimate notifications related to your request',
      '• Rescheduling notifications if appointment times need to be adjusted',
      '• Post-service follow-up messages related to service quality or next steps',
      '• Promotional offers, discounts, and special deals (only if you have opted in to receive marketing messages)',
    ],
  },
  {
    title: '8. Age Requirement',
    content: 'You must be at least 18 years of age to use the SMS messaging services provided by Diaz Global Enterprises LLC. By opting in to receive text messages, you confirm that you are 18 years of age or older. If we become aware that a person under the age of 18 has opted in to our messaging services, we will promptly remove their information and cancel their enrollment in the program.',
  },
  {
    title: 'Opting Out',
    content: 'You can cancel the SMS service at any time. Simply text "STOP" to the number from which you received the message. After you send the SMS message "STOP," we will send you a confirmation message that you have been unsubscribed. After this, you will no longer receive SMS messages from us. If you want to join again, simply sign up as you did the first time and we will start sending SMS messages to you again.',
  },
  {
    title: 'Getting Help',
    content: 'If you are experiencing issues with the messaging program, you can reply with the keyword HELP for more assistance, or you can get help directly at santos@diazsolutions.us.',
  },
  {
    title: 'Carrier Liability',
    content: 'Carriers are not liable for delayed or undelivered messages.',
  },
  {
    title: 'Message Frequency & Data Rates',
    content: 'As always, message and data rates may apply for any messages sent to you from us and to us from you. Message frequency may vary based on your interactions and service requests. If you have any questions about your text plan or data plan, it is best to contact your wireless provider.',
  },
  {
    title: 'Privacy',
    content: 'If you have any questions regarding privacy, please read our privacy policy at https://diazsolutions.us/privacy.',
  },
  {
    title: '9. Modifications',
    content: 'Diaz Global Enterprises LLC may revise these Terms of Use for its website at any time without notice. By using this website you are agreeing to be bound by the then-current version of these Terms of Use.',
  },
  {
    title: '10. Governing Law',
    content: 'These terms and conditions are governed by and construed in accordance with the laws of the State of New York, and you irrevocably submit to the exclusive jurisdiction of the courts in that state.',
  },
];

export default function Terms() {
  return (
    <>
      <Nav />
      <main style={{ minHeight: '100vh', position: 'relative', zIndex: 1 }}>
        <div className="section" style={{ maxWidth: '800px' }}>
          <div className="section-head" style={{ textAlign: 'left' }}>
            <div className="eyebrow">Legal</div>
            <h1 className="section-title">Terms of Use</h1>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', marginTop: '8px' }}>Last updated: March 25, 2026</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingBottom: '80px' }}>
            {sections.map(s => (
              <div key={s.title} style={{
                background: 'rgba(13,26,53,0.5)',
                border: '1px solid rgba(91,173,255,0.1)',
                borderRadius: '16px',
                padding: '28px 32px',
              }}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>{s.title}</h2>
                {Array.isArray(s.content)
                  ? s.content.map((line, i) => (
                    <p key={i} style={{ fontSize: '15px', lineHeight: 1.7, color: line.startsWith('•') ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.65)', marginBottom: i < s.content.length - 1 ? '8px' : 0, paddingLeft: line.startsWith('•') ? '12px' : 0 }}>
                      {line}
                    </p>
                  ))
                  : <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,0.65)' }}>{s.content}</p>
                }
              </div>
            ))}

            <div style={{
              background: 'rgba(46,91,255,0.06)',
              border: '1px solid rgba(91,173,255,0.15)',
              borderRadius: '16px',
              padding: '28px 32px',
            }}>
              <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'rgba(255,255,255,0.5)' }}>
                <strong style={{ color: 'rgba(255,255,255,0.7)' }}>Diaz Global Enterprises LLC</strong><br />
                DBA Diaz Solutions<br />
                Long Island, NY<br />
                <a href="mailto:santos@diazsolutions.us" style={{ color: 'var(--ds-cyan)' }}>santos@diazsolutions.us</a>
              </p>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', marginTop: '16px', lineHeight: 1.6 }}>
                This site is not part of, or endorsed by, Facebook or any social media platform in any way. Facebook is a trademark of Facebook, Inc. All product names, logos and brands are property of their respective owners. We make no guarantees for merchant account approvals or specific savings amounts.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
