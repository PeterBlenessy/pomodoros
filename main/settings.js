
const Store = require('electron-store');

const   schema = {
  launchAtStart: {
    type: 'boolean',
    default: true
  },
  allowAnalytics: {
    type: 'boolean',
    default: true
  }
};

const store = new Store({schema});

module.exports = store;
