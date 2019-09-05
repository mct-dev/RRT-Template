import { IHttpErrorAction, IHttpSendAction, IHttpSuccessAction } from "./http";
import {
  IDeleteTodoAction,
  IFetchTodosAction,
  IFetchTodosErrorAction
} from "./todos";
import { IAuthSuccessAction, IAuthErrorAction, IAuthClearAction } from "./auth";

export enum ActionTypes {
  FETCH_TODOS,
  FETCH_TODOS_ERROR,
  DELETE_TODO,
  HTTP_SUCCESS,
  HTTP_SEND,
  HTTP_ERROR,
  AUTH_SUCCESS,
  AUTH_ERROR,
  AUTH_CLEAR
}

export type Action =
  | IFetchTodosAction
  | IFetchTodosErrorAction
  | IDeleteTodoAction
  | IHttpErrorAction
  | IHttpSendAction
  | IHttpSuccessAction
  | IAuthSuccessAction
  | IAuthErrorAction
  | IAuthClearAction;
