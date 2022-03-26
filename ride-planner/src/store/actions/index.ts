import { IBook } from "../../types/IBook";



export const addToFav = (data: IBook) => ({
  type: "ADD_TO_FAV",
  payload: data,
});

export const removeFromFav = (data: IBook) => ({
  type: "REMOVE_FROM_FAV",
  payload: data,
});
