import { AnyAction } from "redux";
import { initialState } from "../index";

export default function favouritesReducer(
  state = initialState.favourites,
  action: AnyAction
) {
  /* console.log(action, state);
  console.log("Payload! : ", action.payload); */
  switch (action.type) {
    case "ADD_TO_FAV":
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case "REMOVE_FROM_FAV":
      return {
        ...state,
        data: state.data.filter((book) => book.isbn !== action.payload.isbn),
      };
    default:
      return state;
  }
}
