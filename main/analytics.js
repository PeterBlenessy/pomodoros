// Import Nucleus for usage statistics and init with our app ID
const analytics = require('nucleus-nodejs');
const store = require('./settings.js');

if (store.get('allowAnalytics')) {
  analytics.init('5ecd71f0d9e1be031ff10684');
}

module.exports = { analytics };