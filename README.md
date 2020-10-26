# Podcast Privacy

[![npm (scoped)](https://img.shields.io/npm/v/podcast-privacy.svg)](https://www.npmjs.com/package/podcast-privacy)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/podcast-privacy.svg)](https://www.npmjs.com/package/podcast-privacy)

Get information about tracking, stats collection, and advertising for podcast hosting providers from an episode's URL.

## Install

```
$ npm install podcast-privacy
```

## Usage

```js
const podcastPrivacyInfo = require('podcast-privacy');

podcastPrivacyInfo('https://dts.podtrac.com/redirect.mp3/chtbl.com/track/8DB4DB/rss.art19.com/episodes/16fe0959-f7e9-40f0-b7c6-8a8c53d4fe73.mp3');
//=> [
		{
		  "name": "Podtrac",
		   "abilities": [
		     "tracking",
		     "stats"
		   ]
		},
		{
		  "name": "Chartable",
		   "abilities": [
		     "stats"
		   ]
		},
		{
		  "name": "Art19",
		  "abilities": [
		    "hosting"
		  ]
		}
	]
```
