import { combineReducers } from 'redux';
import RoomReducer from './RoomReducer';
import SearchReducer from './SearchReducer';

export default combineReducers({
  room: RoomReducer,
  search: SearchReducer,
});
