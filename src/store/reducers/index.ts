import { combineReducers } from "redux";
import { IHttpRequest, ITodo } from "../actions";
import { IAuthStatus } from "../actions/auth";
import { authReducer } from "./auth";
import { httpReducer } from "./http";
import { todosReducer } from "./todos";

export interface IStoreState {
  http: IHttpRequest;
  todos: ITodo[];
  auth: IAuthStatus;
}

export const reducers = combineReducers<IStoreState>({
  auth: authReducer,
  http: httpReducer,
  todos: todosReducer,
});
