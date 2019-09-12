import axios from "axios";
import { Dispatch } from "redux";
import { makeHttpRequest } from "./http";
import { Action, ActionTypes as AT } from "./types";

export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

export interface IFetchTodosAction {
  type: AT.FETCH_TODOS;
  payload: ITodo[];
}

export interface IFetchTodosErrorAction {
  type: AT.FETCH_TODOS_ERROR;
  payload: Error;
}

export interface IDeleteTodoAction {
  type: AT.DELETE_TODO;
  payload: number;
}

const todosUrl = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = (): ((dispatch: Dispatch<Action>) => Promise<void>) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const result = await makeHttpRequest(dispatch, () =>
        axios.get<ITodo[]>(todosUrl),
      );
      dispatch({
        payload: result.data,
        type: AT.FETCH_TODOS,
      });
    } catch (err) {
      dispatch({
        payload: err,
        type: AT.FETCH_TODOS_ERROR,
      });
    }
  };
};

export const fetchTodosError = (err: Error): IFetchTodosErrorAction => {
  return {
    payload: err,
    type: AT.FETCH_TODOS_ERROR,
  };
};

export const deleteTodo = (id: number): IDeleteTodoAction => {
  return {
    payload: id,
    type: AT.DELETE_TODO,
  };
};
