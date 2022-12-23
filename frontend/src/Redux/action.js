import { GET_PLAYERS, STORE_CURRENT_PLAYER } from "./actionType";
import axios from "axios";

export const storePlayer = (payload)=>{
    return {type:STORE_CURRENT_PLAYER,payload:payload}
}
export const getPlayers = () => async (dispatch) => {
  try {
    let { data } = await axios.get("https://mock-13-keyboard.onrender.com/dashboard");
    dispatch({ type: GET_PLAYERS, payload: data });
  } catch (error) {
    console.log({ error });
  }
};