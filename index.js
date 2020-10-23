const abilities = {
  TRACKING: 'Tracking',
  STATS: 'Stats',
  HOSTING: 'Hosting',
  ADVERTISING: 'Advertising',
};

const podcastHostData = {
  'podtrac.com': {
    name: 'Podtrac',
    abilities: [abilities.STATS],
    privacyPolicyURL: 'http://analytics.podtrac.com/consumer-privacy-policy',
  },
  'pdst.fm': {
    name: 'Podsights',
    abilities: [abilities.TRACKING],
    privacyPolicyURL: 'https://podsights.com/privacy/',
  },
  'chtbl.com': {
    name: 'Chartable',
    abilities: [abilities.TRACKING, abilities.STATS],
  },
  'art19.com': {
    name: 'Art19',
    abilities: [abilities.ADVERTISING, abilities.TRACKING, abilities.HOSTING],
  },
  'podbean.com': {
    name: 'Podbean',
    abilities: [abilities.HOSTING],
  },
  'prxu.org': {
    name: 'PRX',
    abilities: [abilities.HOSTING],
  },
  'megaphone.fm': {
    name: 'Megaphone',
    abilities: [abilities.ADVERTISING, abilities.TRACKING, abilities.HOSTING],
  },
  'soundcloud.com': {
    name: 'Soundcloud',
    abilities: [abilties.HOSTING],
  },
  'cdn.simplecast.fm': {
    name: 'Simplecast',
    abilities: [abilities.HOSTING, abilities.STATS],
  },
  'transistor.fm': {
    name: 'Transistor.fm',
    abilities: [abilities.HOSTING, abilities.STATS],
  },
  'traffic.libsyn.com': {
    name: 'Libsyn',
    abilities: [abilities.HOSTING, abilities.STATS],
  },
  'npr.org': {
    name: 'NPR',
    abilities: [abilities.ADVERTISING, abilities.TRACKING, abilities.HOSTING],
  },
  'anchor.fm': {
    name: 'Anchor (from Spotify)',
    abilities: [abilities.ADVERTISING, abilities.TRACKING, abilities.HOSTING],
  },
  'omny.fm': {
    name: 'Omny',
    abilities: [abilities.ADVERTISING, abilities.TRACKING, abilities.HOSTING],
  },
  'feedproxy.google.com': {
    // Need to get "feedburner:origLink" from RSS feed
    name: 'Feedburner (from Google)',
    abilities: [abilities.TRACKING, abilities.STATS],
  },
};

function podcastHostInfo(url) {
  if (!url || typeof url != 'string')
    throw new Error('Invalid or missing url.');
  return Object.keys(podcastHostData)
    .filter(key => url.toLowerCase().includes(key))
    .map(key => podcastHostData[key]);
}

module.exports = podcastHostInfo;
