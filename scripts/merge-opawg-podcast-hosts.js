const { podcastHostData, abilities } = require('../data/podcast-hosts');
const fetch = require('node-fetch');

const mergeData = async () => {
  const hosts = await fetch(
    'https://raw.githubusercontent.com/opawg/podcast-hosts/master/src/hosts.json'
  ).then(res => res.json());
  return hosts
    .filter(host => !podcastHostData[host.pattern])
    .map(host => {
      const newHost = {
        name: host.hostname,
        privacyPolicyURL: host.hostprivacyurl,
        abilities: [],
      };
      if (host.abilities_stats == 1) newHost.abilities.push(abilities.STATS);
      if (host.abilities_tracking == 1)
        newHost.abilities.push(abilities.TRACKING);
      if (host.abilities_dynamicaudio == 1)
        newHost.abilities.push(abilities.DYNAMIC_AUDIO);
      return [host.pattern, newHost];
    })
    .reduce((hostsObj, [key, value]) => {
      hostsObj[key] = value;
      return hostsObj;
    }, {});
};

mergeData().then(newHosts => console.log(newHosts));
