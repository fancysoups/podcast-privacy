const abilities = {
  STATS: 'Stats',
  TRACKING: 'Tracking',
  DYNAMIC_ADVERTISING: 'Dynamic Advertising',
};

const podcastHostData = {
  'podtrac.com': {
    name: 'Podtrac',
    abilities: [abilities.STATS],
    privacyPolicyURL: 'http://analytics.podtrac.com/consumer-privacy-policy',
  },
  'pdst.fm': {
    name: 'Podsights',
    abilities: [abilities.STATS, abilities.TRACKING],
    privacyPolicyURL: 'https://podsights.com/privacy/',
  },
  'chtbl.com': {
    name: 'Chartable',
    abilities: [abilities.STATS, abilities.TRACKING],
    privacyPolicyURL: 'https://chartable.com/privacy',
  },
  'art19.com': {
    name: 'Art19',
    abilities: [
      abilities.STATS,
      abilities.TRACKING,
      abilities.DYNAMIC_ADVERTISING,
    ],
    privacyPolicyURL: 'https://art19.com/privacy',
  },
  'podbean.com': {
    name: 'Podbean',
    abilities: [abilities.STATS, abilities.DYNAMIC_ADVERTISING],
    privacyPolicyURL: 'https://www.podbean.com/privacy',
  },
  'prxu.org': {
    name: 'PRX',
    abilities: [abilities.STATS, abilities.DYNAMIC_ADVERTISING],
    privacyPolicyURL: 'https://www.prx.org/privacy-policy',
  },
  'megaphone.fm': {
    name: 'Megaphone',
    abilities: [
      abilities.STATS,
      abilities.TRACKING,
      abilities.DYNAMIC_ADVERTISING,
    ],
    privacyPolicyURL: 'https://www.megaphone.fm/terms/privacy',
  },
  'soundcloud.com': {
    name: 'Soundcloud',
    abilities: [abilities.STATS],
    privacyPolicyURL: 'https://soundcloud.com/pages/privacy',
  },
  'cdn.simplecast.fm': {
    name: 'Simplecast',
    abilities: [abilities.STATS],
    privacyPolicyURL: 'https://simplecast.com/privacy/',
  },
  'transistor.fm': {
    name: 'Transistor.fm',
    abilities: [abilities.STATS],
    privacyPolicyURL: 'https://transistor.fm/privacy',
  },
  'traffic.libsyn.com': {
    name: 'Libsyn',
    abilities: [abilities.STATS],abilities.DYNAMIC_ADVERTISING,
    privacyPolicyURL: 'https://libsyn.com/tos-policies/privacy-policy/',
  },
  'npr.org': {
    name: 'NPR',
    abilities: [
      abilities.STATS,
      abilities.TRACKING,
      abilities.DYNAMIC_ADVERTISING,
    ],
    privacyPolicyURL: 'https://www.npr.org/about-npr/179878450/privacy-policy',
  },
  'anchor.fm': {
    name: 'Anchor (from Spotify)',
    abilities: [
      abilities.STATS,
      abilities.TRACKING,
      abilities.DYNAMIC_ADVERTISING,
    ],
    privacyPolicyURL: 'https://anchor.fm/privacy',
  },
  'omny.fm': {
    name: 'Omny',
    abilities: [
      abilities.STATS,
      abilities.TRACKING,
      abilities.DYNAMIC_ADVERTISING,
    ],
    privacyPolicyURL: 'https://omnystudio.com/policies/listener',
  },
  'feedproxy.google.com': {
    name: 'Feedburner (from Google)',
    abilities: [abilities.STATS],
    privacyPolicyURL: 'https://policies.google.com/privacy',
  },
  'noxsolutions.com': {
    name: 'Nox Solutions',
    abilities: [
      abilities.STATS,
      abilities.TRACKING,
      abilities.DYNAMIC_ADVERTISING,
    ],
    privacyPolicyURL: 'https://www.noxsolutions.com/',
  },
  'acast.com': {
    name: 'Acast',
    abilities: [
      abilities.STATS,
      abilities.TRACKING,
      abilities.DYNAMIC_ADVERTISING,
    ],
    privacyPolicyURL: 'https://www.acast.com/en/privacy',
  },
  'podomatic.com': {
    name: 'Podomatic',
    abilities: [abilities.STATS],
    privacyPolicyURL: 'https://www.podomatic.com/about/privacy',
  },
  'blubrry.com': {
    name: 'Blubrry',
    abilities: [abilities.STATS, abilities.DYNAMIC_ADVERTISING],
    privacyPolicyURL: 'https://blubrry.com/about/privacy-policy/',
  },
  'fireside.fm': {
    name: 'Fireside',
    abilities: [abilities.STATS],
    privacyPolicyURL: 'https://fireside.fm/privacy',
  },
  'pdcn.co': {
    name: 'Podcorn',
    abilities: [abilities.STATS],
    privacyPolicyURL: 'https://podcorn.com/privacy/',
  },
  'audioboom.com': {
    name: 'Audioboom',
    abilities: [abilities.STATS, abilities.DYNAMIC_ADVERTISING],
    privacyPolicyURL: 'https://audioboom.com/about/privacy',
  },
  'spreaker.com': {
    name: 'Spreaker',
    abilities: [abilities.STATS],
    privacyPolicyURL: 'https://www.spreaker.com/privacy',
  },
  'buzzsprout.com': {
    name: 'Buzzsprout',
    abilities: [abilities.STATS],
    privacyPolicyURL: 'https://www.buzzsprout.com/privacy',
  },
  'captivate.fm': {
    name: 'Captivate',
    abilities: [abilities.STATS, abilities.DYNAMIC_ADVERTISING],
    privacyPolicyURL: 'https://www.captivate.fm/privacy-policy-for-listeners/',
  },
  'podigee.com': {
    name: 'Podigee',
    abilities: [
      abilities.STATS,
      abilities.TRACKING,
      abilities.DYNAMIC_ADVERTISING,
    ],
    privacyPolicyURL: 'https://www.podigee.com/en/about/privacy',
  },
  'castfire.com': {
    name: 'WideOrbit',
    abilities: [
      abilities.STATS,
      abilities.TRACKING,
      abilities.DYNAMIC_ADVERTISING,
    ],
    privacyPolicyURL: 'https://www.wideorbit.com/privacy/',
  },
  'redcircle.com': {
    name: 'RedCircle',
    abilities: [
      abilities.STATS,
      abilities.TRACKING,
      abilities.DYNAMIC_ADVERTISING,
    ],
    privacyPolicyURL: 'https://redcircle.com/privacy',
  },
  'podserve.fm': {
    name: 'Podserve',
    abilities: [abilities.STATS],
    privacyPolicyURL: 'https://www.podserve.fm/privacy/',
  },
};

function podcastPrivacyInfo(url) {
  if (!url || typeof url != 'string')
    throw new Error('Invalid or missing url.');
  return Object.keys(podcastHostData)
    .filter(key => url.toLowerCase().includes(key))
    .map(key => podcastHostData[key]);
}

module.exports = podcastPrivacyInfo;
