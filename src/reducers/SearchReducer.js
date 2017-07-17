import {
  VIDEOS_START_FETCH,
  VIDEOS_END_FETCH,
} from '../actions/types';

const INITIAL_STATE = {
  isLoading: false,
  videos: [],
  searchString: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case VIDEOS_START_FETCH:
      return { ...state, isLoading: true };
    case VIDEOS_END_FETCH:
      return { ...state,
        isLoading: false,
        videos: action.payload.videos,
        searchString: action.payload.searchString,
      };
    default:
      return state;
  }
};
