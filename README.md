# Podcast Privacy

[![npm (scoped)](https://img.shields.io/npm/v/podcast-privacy.svg)](https://www.npmjs.com/package/podcast-privacy)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/podcast-privacy.svg)](https://www.npmjs.com/package/podcast-privacy)

Get information about tracking, stats collection, and advertising for podcast hosting providers.

## Install

```
$ npm install podcast-privacy
```

## Usage

```js
const podcastPrivacy = require('podcast-privacy');

podcastPrivacy('https://dts.podtrac.com/redirect.mp3/chtbl.com/track/8DB4DB/rss.art19.com/episodes/16fe0959-f7e9-40f0-b7c6-8a8c53d4fe73.mp3');
/*
	[
		{
			name: 'Podtrac',
			abilities: [ 'Stats' ],
			privacyPolicyURL: 'http://analytics.podtrac.com/consumer-privacy-policy'
		},
		{
			name: 'Chartable',
			abilities: [ 'Tracking', 'Stats' ],
			privacyPolicyURL: 'https://chartable.com/privacy'
		},
		{
			name: 'Art19',
			abilities: [ 'Advertising', 'Tracking', 'Hosting' ],
			privacyPolicyURL: 'https://art19.com/privacy'
		}
	]
/*
```

## Hosted API

podcast-privacy is also available as a JSON api. [Register for a free API key here.](https://podcast-privacy.com/register)

## Special Thanks

Special thanks to [Marco Arment](https://marco.org) and his work on [Overcast](https://overcast.fm) for leading the charge on increasing transparency for listeners.

## Contributing

This package is maintained by the creators of [Podbay](https://podbay.fm). To add or change information in the package, you can open a pull request, file an issue, or email us at help@podbay.fm.
