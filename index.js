const abilities = {
  TRACKING: 'tracking',
  STATS: 'stats',
  HOSTING: 'hosting',
  ADVERTISING: 'advertising',
};

const podcastHostData = {
  'podtrac.com': {
    name: 'Podtrac',
    abilities: [abilities.TRACKING, abilities.STATS],
  },
  'chtbl.com': {
    name: 'Chartable',
    abilities: [abilities.STATS],
  },
  'art19.com': {
    name: 'Art19',
    abilities: [abilities.HOSTING],
  },
  'podbean.com': {
    name: 'Podbean',
    abilities: [abilities.HOSTING],
  },
  'prxu.org': {
    name: 'PRX',
    abilities: [abilities.HOSTING],
  },
  'feedproxy.google.com': {
    // Need to get "feedburner:origLink" from RSS feed
    name: 'Feedburner (Google)',
    abilities: [abilities.TRACKING, abilities.STATS],
  },
};

function getPodcastHostInfoForEpisodeURL(url) {
  if (!url || typeof url != 'string')
    throw new Error('Invalid or missing url.');
  return Object.keys(podcastHostData)
    .filter(key => url.toLowerCase().includes(key))
    .map(key => podcastHostData[key]);
}

module.exports = getPodcastHostInfoForEpisodeURL;
