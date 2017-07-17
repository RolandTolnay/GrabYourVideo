import _ from 'lodash';
import RNFetchBlob from 'react-native-fetch-blob';
import { youtubeApiKey } from '../apiConfig';

class VideoFetcher {

  static searchFor(queryString) {
    const url = 'https://www.googleapis.com/youtube/v3/search';
    const params = {
      part: 'snippet',
      maxResults: '25',
      key: youtubeApiKey,
      type: 'video',
    };
    const { part, maxResults, key, type } = params;

    const encodedQuery = encodeURIComponent(queryString);
    const paramString = `?part=${part}&maxResults=${maxResults}&key=${key}&type=${type}&q=${encodedQuery}`;
    const urlWithParams = url + paramString;

    return new Promise((resolve, reject) => {
      RNFetchBlob.fetch('GET', urlWithParams)
        .then((res) => {
          const json = res.json();
          const mapped = _.map(json.items, (value) => ({
              id: value.id.videoId,
              title: value.snippet.title,
              thumbnail: value.snippet.thumbnails.medium.url,
              channel: value.snippet.channelTitle,
            }));
          resolve(mapped);
        })
        .catch((message, code) => {
          reject(message, code);
        });
    });
  }
}

export default VideoFetcher;
