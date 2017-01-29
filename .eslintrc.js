module.exports = {
  root: true,
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html',
  ],
  // add your custom rules here
  rules: {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'arrow-parens': 0,
    'comma-dangle': 0
  },
  settings: {
  'import/resolver': {
    'webpack': {
      'config': process.env.NODE_ENV === 'testing'
        ? 'build/webpack.prod.conf.js' : 'build/webpack.dev.conf.js'
      }
    }
  },
  env: {
    "browser": true,
    "node": true
  },
};
