import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { IBook } from "../types/IBook";
import favouritesReducer from "./reducers/favourites";

export interface InitialState {
  favourites: {
    data: IBook[];
  };
}

export const initialState: InitialState = {
  favourites: {
    data: [],
  },
};

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const mainReducer = combineReducers({
  favourites: favouritesReducer,
});

export default createStore(
  mainReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
