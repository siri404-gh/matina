const title = 'Sreeram Padmanabhan';
const shortName = 'Sree';
const tagline = '👨🏻‍💻 Web Artist | 📸 Photographer | 💼 Solo Traveller | 👨🏼‍🍳 Chef';
const description = tagline;
const keywords = 'sreeram, padmanabhan, web, developer, website, solo, travel, photography, cooking';
const domain = 'https://www.sreeram.app';

module.exports = {
  login: false,
  seo: {
    title,
    description,
    keywords,
    ogImage: domain + '/img/og_image.jpg',
    ogImageAlt: title,
    ogUrl: domain + '',
    ogTitle: title,
    ogDescription: tagline,
    ogType: 'website',
    ogFbAppId: '297023651089707',
    themeColor: '#ff5500',
    sitemap: domain,
    canonicalUrl: domain,
  },
  manifest: {
    seed: {
      'short_name': shortName,
      'name': title,
      'start_url': '/',
      'background_color': '#000000',
      'display': 'standalone',
      'theme_color': '#ffaa50',
      "icons": [
        {
          "src": "/img/logo-192.png",
          "type": "image/png",
          "sizes": "192x192",
        },
        {
          "src": "/img/logo-512.png",
          "type": "image/png",
          "sizes": "512x512",
        },
      ],
    },
  },
  navbar: {
    title,
    tagline: '👨🏻‍💻📸 💼 👨🏼‍🍳 ',
  },
  ports: {
    wdsPort: 9000,
    serverPort: 9001,
  },
  dist: '_dist',
  firebaseConfig: {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  },
  adsensePubId: 'ca-pub-6831276331714408',
  googleSearchbarId: 'partner-pub-6831276331714408:3209356504',
  googleAnalyticsId: 'UA-113469131-2',
};
