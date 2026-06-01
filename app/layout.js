import './globals.css';

export const metadata = {
  title: 'Diaz Solutions — Smart Payment Processing',
  description: 'Diaz Solutions provides fast, secure, and resourceful payment processing solutions for modern businesses. Meet Rocco — your resourceful fintech partner.',
  keywords: 'payment processing, fintech, Diaz Solutions, Rocco, business payments, payment gateway',
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/icon.png', type: 'image/png' },
    ],
    shortcut: '/icon.png',
  },
  openGraph: {
    title: 'Diaz Solutions — Smart Payment Processing',
    description: 'Fast, secure, and resourceful payment solutions powered by Diaz Solutions.',
    type: 'website',
    images: [{ url: '/icon.png' }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="starfield" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
