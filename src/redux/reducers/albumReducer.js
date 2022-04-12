import { ActionTypes } from "../types/action-types";

const initialState = {
  albums: [],
};

export const albumsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_ALBUMS:
      return { ...state, albums: payload };

    default:
      return state;
  }
};

export const getDetailAlbumReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_ALBUM:
      return { ...state, ...payload };

    default:
      return state;
  }
};
