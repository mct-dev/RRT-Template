import { combineReducers } from "redux";
import { IHttpRequest, ITodo } from "../actions";
import { httpReducer } from "./http";
import { todosReducer } from "./todos";
import { authReducer } from "./auth";
import { IAuthStatus } from "../actions/auth";

export interface IStoreState {
  http: IHttpRequest;
  todos: ITodo[];
  auth: IAuthStatus;
}

export const reducers = combineReducers<IStoreState>({
  http: httpReducer,
  todos: todosReducer,
  auth: authReducer,
});
