const { podcastHostData } = require('./data/podcast-hosts');

function podcastPrivacyInfo(url) {
  if (!url || typeof url != 'string')
    throw new Error('Invalid or missing url.');
  return Object.keys(podcastHostData)
    .filter(key => url.toLowerCase().includes(key))
    .map(key => podcastHostData[key]);
}

module.exports = podcastPrivacyInfo;
