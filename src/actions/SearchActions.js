import {
  VIDEOS_START_FETCH,
  VIDEOS_END_FETCH,
} from './types';
import VideoFetcher from '../logic/VideoFetcher';

export const searchForVideos = (searchString) => {
  return (dispatch) => {
    dispatch({ type: VIDEOS_START_FETCH });
    VideoFetcher.searchFor(searchString)
      .then((videos) => {
        dispatch({
          type: VIDEOS_END_FETCH,
          payload: { videos, searchString },
        });
      });
  };
};
