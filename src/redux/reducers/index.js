import { combineReducers } from "redux";
import { albumsReducer, getDetailAlbumReducer } from "./albumReducer";
import { usersReducer } from "./userReducer";

const reducers = combineReducers({
  allAlbums: albumsReducer,
  allUsers: usersReducer,
  albumDetail: getDetailAlbumReducer,
});

export default reducers;
