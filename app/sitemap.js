export default function sitemap() {
  const baseUrl = 'https://diazsolutions.us';
  const pages = [
    { url: baseUrl, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${baseUrl}/services`, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${baseUrl}/pricing`, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${baseUrl}/about`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/contact`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/portfolio`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${baseUrl}/blog`, priority: 0.7, changeFrequency: 'weekly' },
    { url: `${baseUrl}/privacy`, priority: 0.3, changeFrequency: 'yearly' },
    { url: `${baseUrl}/terms`, priority: 0.3, changeFrequency: 'yearly' },
  ];

  return pages.map(page => ({
    url: page.url,
    lastModified: new Date().toISOString(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
