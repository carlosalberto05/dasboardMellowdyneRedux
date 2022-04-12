import { ActionTypes } from "../types/action-types";

export const getAlbumsAction = (albums) => {
  return {
    type: ActionTypes.GET_ALBUMS,
    payload: albums,
  };
};

export const getAlbumAction = (album) => {
  return {
    type: ActionTypes.GET_ALBUM,
    payload: album,
  };
};
