import { ActionTypes } from "../types/action-types";

export const getUsersAction = (users) => {
  return {
    type: ActionTypes.GET_USERS,
    payload: users,
  };
};
