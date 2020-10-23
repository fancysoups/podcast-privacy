const assert = require('assert');
const getPodcastHostInfoForEpisodeURL = require('../index.js');

describe('PodcastHostInfo', function () {
  describe('Example URL #1', function () {
    const data = getPodcastHostInfoForEpisodeURL(
      'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/8DB4DB/rss.art19.com/episodes/16fe0959-f7e9-40f0-b7c6-8a8c53d4fe73.mp3'
    );
    it('should return an array with 3 items', function () {
      assert.equal(data.length, 3);
    });
  });
  describe('Example URL #2', function () {
    const data = getPodcastHostInfoForEpisodeURL(
      'http://feedproxy.google.com/~r/ReverberationRadio/~5/ee8I72Y6HLQ/Reverberation_403.mp3'
    );
    it('should return an array with 1 item', function () {
      assert.equal(data.length, 1);
    });
  });
  describe('Example URL #3 (Unknown)', function () {
    const data = getPodcastHostInfoForEpisodeURL('https://example.com');
    it('should return an array with 0 items', function () {
      assert.equal(data.length, 0);
    });
  });
  describe('Missing URL', function () {
    it('should throw an error', function () {
      assert.throws(() => getPodcastHostInfoForEpisodeURL(), Error);
    });
  });
  describe('Invalid URL type', function () {
    it('should throw an error', function () {
      assert.throws(() => getPodcastHostInfoForEpisodeURL(12345), Error);
    });
  });
});
