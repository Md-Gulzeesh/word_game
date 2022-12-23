import { GET_PLAYERS, STORE_CURRENT_PLAYER } from "./actionType";

export const Reducer = (state, { type, payload }) => {
  switch (type) {
    case GET_PLAYERS:
      return { ...state, dashBoard: payload };
    case STORE_CURRENT_PLAYER:
      return { ...state, currentPlayer: payload };
    default:
      return state;
  }
};
