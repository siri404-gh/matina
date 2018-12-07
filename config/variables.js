const title = 'Title';
const shortName = 'Short Name';
const tagline = 'tagline';
const description = tagline;
const keywords = 'keyword';
const domain = '';

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
    ogFbAppId: '',
    themeColor: '#ff5500',
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
    tagline,
  },
  ports: {
    wdsPort: 9000,
    serverPort: 9001,
  },
  dist: '_dist',
  firebaseConfig: {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "sreeram-stage.firebaseapp.com",
    databaseURL: "https://sreeram-stage.firebaseio.com",
    projectId: "sreeram-stage",
    storageBucket: "sreeram-stage.appspot.com",
    messagingSenderId: "857242952614",
  },
  adsensePubId: 'ca-pub-6831276331714408',
};
