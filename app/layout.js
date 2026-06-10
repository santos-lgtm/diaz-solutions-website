import './globals.css';

export const metadata = {
  metadataBase: new URL('https://diazsolutions.us'),
  title: {
    default: 'Diaz Solutions — Merchant Services & Payment Processing | Long Island, NY',
    template: '%s | Diaz Solutions',
  },
  description: 'Diaz Solutions provides merchant service consulting and payment processing solutions for businesses of all sizes in Long Island, NY. Credit card processing, POS systems, e-commerce payments, ACH, high-risk accounts, and more.',
  keywords: [
    'merchant services Long Island NY',
    'payment processing Long Island',
    'credit card processing NY',
    'POS systems Long Island',
    'merchant account setup',
    'high risk merchant account',
    'ACH processing',
    'payment gateway',
    'Diaz Solutions',
    'Rocco the Resourceful',
    'cash discount program',
    'e-commerce payment processing',
  ],
  authors: [{ name: 'Santos Diaz', url: 'https://diazsolutions.us' }],
  creator: 'Santos Diaz',
  icons: {
    icon: [{ url: '/icon.png', type: 'image/png' }],
    apple: [{ url: '/icon.png', type: 'image/png' }],
    shortcut: '/icon.png',
  },
  openGraph: {
    title: 'Diaz Solutions — Merchant Services & Payment Processing',
    description: 'Merchant service consulting and payment solutions for businesses of all sizes. Based in Long Island, NY.',
    url: 'https://diazsolutions.us',
    siteName: 'Diaz Solutions',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/icon.png', width: 512, height: 512, alt: 'Diaz Solutions Logo' }],
  },
  twitter: {
    card: 'summary',
    title: 'Diaz Solutions — Merchant Services & Payment Processing',
    description: 'Payment processing & merchant service consulting for businesses in Long Island, NY.',
    creator: '@diazsolutions',
    images: ['/icon.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: {
    canonical: 'https://diazsolutions.us',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'FinancialService'],
  name: 'Diaz Solutions',
  alternateName: 'Diaz Global Enterprises LLC',
  description: 'Merchant service consulting and payment processing solutions for businesses of all sizes. Credit card processing, POS systems, ACH, high-risk accounts, cash discount programs, and global payments.',
  url: 'https://diazsolutions.us',
  logo: 'https://diazsolutions.us/icon.png',
  image: 'https://diazsolutions.us/icon.png',
  telephone: '+1-631-747-5508',
  email: 'santos@diazsolutions.us',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Long Island',
    addressRegion: 'NY',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 40.7891,
    longitude: -73.1350,
  },
  areaServed: [
    { '@type': 'State', name: 'New York' },
    { '@type': 'Country', name: 'United States' },
  ],
  serviceType: [
    'Credit Card Processing',
    'Merchant Services',
    'POS Systems',
    'ACH Processing',
    'High-Risk Merchant Accounts',
    'Cash Discount Programs',
    'E-Commerce Payment Processing',
    'Payment Gateway Setup',
  ],
  sameAs: [
    'https://www.linkedin.com/in/santos-diaz-3abb87289/',
    'https://www.instagram.com/santosdiaz.us/',
    'https://www.facebook.com/santos.diaz.22936',
    'https://x.com/diazsolutions',
  ],
  priceRange: '$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  founder: {
    '@type': 'Person',
    name: 'Santos Diaz',
    jobTitle: 'Founder & Payment Consultant',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div className="starfield" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
