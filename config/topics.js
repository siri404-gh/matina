module.exports = [
  {
    topic: 'Home',
    route: '/',
  },
  {
    topic: 'Javascript Concepts',
    route: [{
      topic: 'Closures in Javascript',
      route: '/post/javascript-concepts/closures',
    },
    {
      topic: 'Callback hell',
      route: '/post/javascript-concepts/callback-hell',
    },
    {
      topic: 'Promises',
      route: '/post/javascript-concepts/promises',
    },
    {
      topic: 'Async/Await',
      route: '/post/javascript-concepts/async-await',
    }],
  },
  {
    topic: 'Development Environment',
    description: 'Setting up of project',
    route: [{
      topic: 'System requirements',
      route: '/post/development-environment/system-requirements',
    },
    {
      topic: 'VS Code extensions',
      route: '/post/development-environment/vscode-extensions',
    },
    {
      topic: 'VS Code preferences',
      route: '/post/development-environment/vscode-preferences',
    },
    {
      topic: 'Command line shortcuts',
      route: '/post/development-environment/aliases',
    },
    {
      topic: 'Git aliases',
      route: '/post/development-environment/git-aliases',
    },
    {
      topic: 'Browser extensions',
      route: '/post/development-environment/browser-extensions',
    }],
  },
  {
    topic: 'Initial Setup',
    route: [
      {
        topic: 'Initial commit',
        route: '/post/initial-setup/initial-commit',
      },
      {
        topic: 'Configure Editorconfig',
        route: '/post/initial-setup/editor-config',
      },
      {
        topic: 'Configure Eslint',
        route: '/post/initial-setup/eslint-config',
      }],
  },
  {
    topic: 'React view layer',
    route: [{
      topic: 'Create entry point',
      route: '/post/react/entry-point',
    },
    {
      topic: 'Configure babel',
      route: '/post/react/configure-babel',
    },
    {
      topic: 'Hot Module Replacement',
      route: '/post/react/hot-module-replacement',
    },
    {
      topic: 'React Router',
      route: '/post/react/react-router',
    },
    {
      topic: 'React Native',
      route: '/post/react/react-native',
    }],
  },
  {
    topic: 'Webpack Configurations', // 'Polyfills',
    route: [{
      topic: 'Development config',
      route: '/post/webpack/dev-config',
    },
    {
      topic: 'Production config',
      route: '/post/webpack/prod-config',
    },
    {
      topic: 'Bundle analysis plugin',
      route: '/post/webpack/bundle-analysis',
    },
    {
      topic: 'Webpack Visualizer plugin',
      route: '/post/webpack/webpack-visualizer',
    },
    {
      topic: 'HTML Webpack Plugin',
      route: '/post/webpack/html-webpack-plugin',
    },
    {
      topic: 'Common config',
      route: '/post/webpack/common-config',
    },
    {
      topic: 'Webpack Dev Server',
      route: '/post/webpack/webpack-dev-server',
    },
    {
      topic: 'Sourcemaps',
      route: '/post/webpack/sourcemaps',
    },
    {
      topic: 'Hot Module Replacement',
      route: '/post/webpack/hot-module-replacement',
    },
    {
      topic: 'Clean Webpack Plugin',
      route: '/post/webpack/clean-webpack-plugin',
    }],
  },
  {
    topic: 'Redux data layer',
    route: [{
      topic: 'What is Redux?',
      route: '/post/redux/what-is-redux',
    },
    {
      topic: 'Redux thunk',
      route: '/post/redux/redux-thunk',
    },
    {
      topic: 'Redux middlewares',
      route: '/post/redux/redux-middlewares',
    }],
  },
  {
    topic: 'Documentation',
    route: [{
      topic: 'JSdoc',
      route: '/post/documentation/jsdoc',
    },
    {
      topic: 'React styleguidist',
      route: '/post/documentation/react-styleguidist',
    }],
  },
  {
    topic: 'Git',
    route: [
      {
        topic: 'Making your project commitizen friendly',
        route: '/post/git/commitizen',
      },
      {
        topic: 'Commit message linting',
        route: '/post/git/commitlint-husky',
      },
      {
        topic: 'Branching strategy',
        route: '/post/git/branching-strategy',
      },
      {
        topic: 'Rebase vs Merge',
        route: '/post/git/rebase-vs-merge',
      }],
  },
  {
    topic: 'Optimising code',
    route: [
      {
        topic: 'Tree Shaking',
        route: '/post/optimisation/tree-shaking',
      },
      {
        topic: 'Production Mode',
        route: '/post/optimisation/production-mode',
      },
      {
        topic: 'Uglification',
        route: '/post/optimisation/uglification',
      },
      {
        topic: 'Minification',
        route: '/post/optimisation/minification',
      },
      {
        topic: 'Split vendor libraries',
        route: '/post/optimisation/split-vendor-libraries',
      },
      {
        topic: 'Code splitting',
        route: '/post/optimisation/splitchunks',
      },
      {
        topic: 'Gzip compression',
        route: '/post/optimisation/gzip-compression',
      },
    ],
  },
  {
    topic: 'DevOps',
    route: [
      {
        topic: 'Dockerize the app',
        route: '/post/devops/dockerize',
      },
    ],
  },
  {
    topic: 'Unit Testing',
    route: [{
      topic: 'Integrating Karma + Jasmine',
      route: '/post/unit-testing/karma-jasmine',
    }], // ['Enzyme', 'Sinon, Spy'],
  },
  {
    topic: 'Cross Browser Testing',
    route: [{
      topic: 'Browserstack Tests',
      route: '/post/cross-browser-testing/browserstack-tests',
    },
    {
      topic: 'Saucelabs Tests',
      route: '/post/cross-browser-testing/saucelabs-tests',
    }],
  },
  // {
  //   topic: 'Code Coverage',
  //   route: [], // ['Sonar analysis', 'Code Climate', 'Codecov', 'Codacy'],
  // },
  {
    topic: 'Progressive Web Apps',
    route: [
      {
        topic: 'Service workers',
        route: '/post/pwa/service-workers',
      },
      {
        topic: 'Making your app a PWA',
        route: '/post/pwa/progressive-web-apps',
      },
    ],
  },
  {
    topic: 'Backend',
    route: [{
      topic: 'Configure Express Server',
      route: '/post/backend/express',
    }], // ['Express', 'Serverside Rendering'],
  },
  {
    topic: 'Continous Integration',
    route: [
      {
        topic: 'Travis CI integration',
        route: '/post/ci/travis-ci-integration',
      },
      {
        topic: 'Circle CI integration',
        route: '/post/ci/circle-ci-integration',
      },
    ],
  },
  {
    topic: 'Continous Deployment', // ['Heroku Node App', 'Heroku docker container', 'Heroku pipelines', 'Firebase Hosting', 'Firebase functions'],
    route: [
      {
        topic: 'Deploy to Heroku',
        route: '/post/cd/heroku-integration',
      },
      {
        topic: 'Deploy to Firebase',
        route: '/post/cd/firebase-integration',
      },
    ],
  },
];
